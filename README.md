# Campus Bakery POS System

**IT415 — Application Development and Emerging Technologies**  
**Midterm Practical Examination**  
**Assigned Scenario 2: Campus Bakery Point-of-Sale System**

## Project Overview

Campus Bakery POS is a web-based point-of-sale application designed to process bakery product orders and cash transactions. It allows users to select products, manage shopping cart quantities, calculate totals, validate cash payments, generate digital receipts, and begin new transactions.

The application uses HTML, CSS, and JavaScript and does not require a database or backend server.

The application features a modern, minimalist bakery storefront design branded as BAKE. It uses warm neutral colors, elegant typography, product photographs, and a responsive layout to provide a clean and user-friendly point-of-sale experience.


## Technologies Used

- **HTML5** — Application structure and interface elements
- **CSS3** — Responsive layout, dashboard styling, and visual presentation
- **JavaScript** — Product catalog, cart management, calculations, payment validation, and receipts
- **Git and GitHub** — Version control and project repository
- **Visual Studio Code** — Development environment

## Product Catalog

| Product | Price |
|---|---:|
| Pandesal (pack of 5) | ₱25.00 |
| Ensaymada | ₱20.00 |
| Spanish Bread | ₱15.00 |
| Chocolate Cupcake | ₱30.00 |
| Loaf Bread | ₱55.00 |
| Brewed Coffee (cup) | ₱25.00 |

## System Features

1. Displays six bakery products with their respective prices.
2. Adds selected products to the shopping cart.
3. Increases or decreases product quantities.
4. Removes individual items from the cart.
5. Automatically calculates item subtotals and the total amount.
6. Clears the shopping cart when starting a new transaction.
7. Accepts customer cash payments through a numeric input field.
8. Validates empty, invalid, negative, and insufficient payment amounts.
9. Calculates customer change automatically.
10. Displays payment confirmation after successful checkout.
11. Generates a digital receipt containing purchased items, quantities, subtotals, total, cash received, change, date, and a transaction reference.
12. Supports new transactions by resetting the cart, payment input, and receipt.


## How to Run the Application

1. Download or clone this GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser using the Live Server extension.
4. Browse the six bakery products displayed in the menu.
5. Click **+ Add to Cart** to select products.
6. Use the **+** and **−** buttons to adjust quantities or remove unwanted products.
7. Review the order summary and total amount.
8. Enter the customer's cash payment in the **Cash Received** field.
9. Click **Complete payment** to process the transaction.
10. Review the payment confirmation and digital receipt, including the total, cash received, and change.
11. Click **Start a new order** to begin another transaction.


## Example Transaction

| Item | Quantity | Subtotal |
|---|---:|---:|
| Pandesal (pack of 5) | 2 | ₱50.00 |
| Chocolate Cupcake | 1 | ₱30.00 |
| **Total** | | **₱80.00** |

**Cash Received:** ₱100.00  
**Change:** ₱20.00


## Project Structure

```text
Campus Bakery POS/
├── index.html
├── style.css
├── script.js
├── README.md
├── AI_USAGE.md
├── images/
│   ├── pandesal.jpg
│   ├── ensaymada.jpg
│   ├── spanish-bread.jpg
│   ├── cupcake.jpg
│   ├── loaf-bread.jpg
│   └── coffee.jpg
└── screenshots/
    ├── 01-product-catalog.png
    ├── 02-shopping-cart.png
    ├── 03-payment-validation.png
    ├── 04-digital-receipt.png
    └── 05-github-commits.png
```

The `images/` folder contains the product photographs used in the bakery catalog.

The `screenshots/` folder contains evidence of the completed application, including the product catalog, shopping cart, payment validation, digital receipt, and GitHub commit history.


## AI-Assisted Development

AI assistance was used during the development process for code generation, interface design, and payment validation improvements. The prompts, evaluations, and developer modifications are documented in `AI_USAGE.md`.

All generated code was incorporated into the project and tested as part of the development workflow.


## Development and Version Control

Git and GitHub were used to track the development progress of the Campus Bakery POS System.

The project includes the following development milestones:

- Initial HTML, CSS, and JavaScript interface.
- Product catalog and shopping cart functionality.
- Quantity adjustment, item removal, and automatic total calculations.
- Cash payment validation and digital receipt generation.
- README and AI-assisted development documentation.
- Minimalist BAKE. storefront redesign.
- Integration of six bakery product images.
- Final application screenshots and GitHub submission evidence.

The complete source code and development history are available in this GitHub repository.

## Scope and Limitations

- Cash payments only
- No database or user authentication
- Products and prices are defined in JavaScript
- Transactions are processed within the browser
- Receipt history is not permanently stored
- No inventory tracking or online payment integration

## Academic Purpose

This project was developed for the IT415 Midterm Practical Examination under **Scenario 2 — Campus Bakery POS**.