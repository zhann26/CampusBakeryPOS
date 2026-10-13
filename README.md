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

1. Download or clone this repository.
2. Open the `CampusBakeryPOS` folder in Visual Studio Code.
3. Open `index.html` in a web browser, or use the Live Server extension.
4. Select products using the **Add to Cart** buttons.
5. Adjust quantities using the **+** and **−** buttons or remove unwanted products.
6. Review the total amount in the shopping cart.
7. Enter the customer's cash payment.
8. Click **Confirm Payment**.
9. Review the digital receipt and change.
10. Click **New Transaction** to begin another order.

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

The `screenshots/` folder will contain evidence of the completed application and GitHub commit history.

## AI-Assisted Development

AI assistance was used during the development process for code generation, interface design, and payment validation improvements. The prompts, evaluations, and developer modifications are documented in `AI_USAGE.md`.

All generated code was incorporated into the project and tested as part of the development workflow.

## Development and Version Control

Git was used to record meaningful development milestones, including:

- Initial project interface
- Product catalog, shopping cart, and payment functionality
- Payment validation and transaction error handling
- Project documentation and final submission preparation

## Scope and Limitations

- Cash payments only
- No database or user authentication
- Products and prices are defined in JavaScript
- Transactions are processed within the browser
- Receipt history is not permanently stored
- No inventory tracking or online payment integration

## Academic Purpose

This project was developed for the IT415 Midterm Practical Examination under **Scenario 2 — Campus Bakery POS**.