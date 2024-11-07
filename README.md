# Spend Bill Gates' Money

A simple React app that lets users simulate spending Bill Gates' wealth on various products. The app allows users to "buy" and "sell" items from a list, updating the balance accordingly and generating a receipt with the total expenditure.

## Demo

You can visit the live site from [this link](https://stately-cupcake-6a2406.netlify.app/)

## Features

- Start with a virtual balance of $100 billion.
- Buy and sell items from a list of products.
- Track remaining balance in real-time.
- View a receipt showing purchased items and the total expenditure.
- Technologies Used
- React for the front-end.
- useState and useEffect for managing state and initial data.
  CSS for styling.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yasarcandamli/SpendBillGatesMoney.git
```

2. Navigate into the project directory:

```bash
cd spend-bill-gates-money
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## How to Use

1. **Buy Items:** Click the "Buy" button next to an item to increase its quantity and reduce the balance.

- Buying an item deducts its price from your balance.
- If your balance is lower than the item’s price, the "Buy" button will be disabled.

2. **Sell Items:** Click the "Sell" button to decrease the item quantity and add its price back to the balance.

- Selling an item is only allowed if you have previously bought it.

3. **View Receipt:** The receipt section shows a list of purchased items, their quantities, individual costs, and the total amount spent.

## Code Overview

### State Management

- `balance`: Tracks the remaining money available to spend.
- `products`: An array of objects representing available products, with properties such as `id`, `name`, `price`, `quantity`.

### Functions

- `handleBuy`: Increases the quantity of an item if there’s enough balance and deducts the item price from the balance.
- `handleSell`: Decreases the quantity of an item and adds the item price back to the balance.
