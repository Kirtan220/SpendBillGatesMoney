import { useEffect, useState } from 'react';
import productsData from './data/products.json';
import './App.css'

function App() {
  const initialBalance = 100000000000;
  const [balance, setBalance] = useState(initialBalance);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  // Alma fonksiyonu
  const handleBuy = (id) => {
    setProducts(products.map((product) => {
      if (product.id === id && balance >= product.price) {
        setBalance(balance - product.price);
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    }));
  };

  // Satma fonksiyonu
  const handleSell = (id) => {
    setProducts(products.map((product) => {
      if (product.id === id && product.quantity > 0) {
        setBalance(balance + product.price);
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
  };

  return (
    <div>
      <div className="container">
        <div className='title'>
          <img className='header-img' src="https://neal.fun/spend/billgates.jpg" alt="Bill Gates" />
          <h1>Spend Bill Gates' Money</h1>
        </div>

        <div className='money-bar'>
          <p>${balance.toLocaleString()}</p>
        </div>

        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className='product-wrapper'>
                <img className='product-img' src={product.img} alt="" />
                <p className='product-name'>{product.name}</p>
                <p className='product-cost'>${product.price.toLocaleString()}</p>
                <div className="product-controls">
                  <button className='product-buy' onClick={() => handleBuy(product.id)} disabled={balance < product.price}>Buy</button>
                  <input className='product-input' type="text" value={product.quantity} readOnly />
                  <button className='product-sell' onClick={() => handleSell(product.id)} disabled={product.quantity === 0}>Sell</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="purchased-items">
          <div className="purchased-headline">
            <p>Your Receipt</p>
          </div>
          {products.filter(product => product.quantity > 0).map(product => (
            <div className='purchased-item' key={product.id}>
              <p className='purchased-item-name'>{product.name}</p>
              <p className='purchased-item-amount'>
                x {product.quantity}
              </p>
              <p className='purchased-item-cost'>
                ${(product.quantity * product.price).toLocaleString()}
              </p>
            </div>
          ))}
          <div className="purchased-total">
            <p>Total</p>
            <p>
              ${products
                .filter(product => product.quantity > 0)
                .reduce((total, product) => total + product.quantity * product.price, 0)
                .toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
