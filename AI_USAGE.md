# AI Usage Documentation

**Project:** Campus Bakery Point-of-Sale System  
**Course:** IT415 — Application Development and Emerging Technologies  
**Examination:** Midterm Practical Examination  
**Assigned Scenario:** Scenario 2 — Campus Bakery POS  
**AI Tool:** ChatGPT

## AI Interaction 1 — Application Interface Development

### Prompt Used

"My instructor assigned Scenario 2 Campus Bakery POS. Let's Start"

This request continued the earlier conversation in which I instructed ChatGPT to follow the same step-by-step development process used during our previous POS practice.

### Purpose

To begin developing the assigned Campus Bakery POS application and receive guidance on project setup, HTML structure, and professional dashboard styling.

### AI Response

ChatGPT provided a step-by-step development workflow using HTML, CSS, and JavaScript. It generated the HTML structure for the Campus Bakery POS and a responsive black-and-white CSS dashboard design.

The interface included a sidebar, product catalog, shopping cart, order summary, payment section, and digital receipt section.

### My Evaluation

**Result: Correct for the intended development stage.**

The generated HTML and CSS provided the initial interface structure. The application required JavaScript before products, cart operations, and payments could function.

I reviewed the interface in the browser before proceeding with the application logic.

### Modifications Made

I created a separate `CampusBakeryPOS` project, added the generated HTML and CSS to the appropriate files, and connected the stylesheet and JavaScript files through `index.html`.

I also initialized Git and recorded the interface as an initial development milestone.

---

## AI Interaction 2 — JavaScript Functionality and Payment Processing

### Prompt Used

"DONE STEP 3."

This was my continuation prompt after completing the HTML interface and CSS design. ChatGPT had already been instructed to guide the development of the Campus Bakery POS step by step.

### Purpose

To implement the bakery product catalog, shopping cart, automatic calculations, payment validation, digital receipt, and new transaction functionality.

### AI Response

ChatGPT generated JavaScript containing the six assigned bakery products and their prices.

The JavaScript implemented:

- Product display and Add to Cart buttons
- Quantity increase and decrease
- Item removal
- Subtotal and total calculations
- Cash payment validation
- Change calculation
- Payment confirmation
- Digital receipt with a transaction reference
- New Transaction reset

### My Evaluation

**Result: Correct for the core functionality, with validation improvements needed.**

The JavaScript implemented the required POS operations. During the next development stage, an issue was identified in the order of payment validation checks: negative values could receive a generic invalid-amount message rather than a specific negative-payment message.

### Modifications Made

I added the generated JavaScript to `script.js`, tested the sample bakery order, and recorded the core functionality in Git.

The payment validation function was subsequently updated to improve error handling.

---

## AI Interaction 3 — Payment Validation and Debugging

### Prompt Used

"DONE STEP 4"

This prompt continued the development workflow after implementing the JavaScript functionality.

### Purpose

To review and improve payment validation and confirm that the application correctly handles invalid cash amounts and successful transactions.

### AI Response

ChatGPT provided an updated `confirmPayment()` function that improved validation for:

- Empty payment input
- Invalid numeric values
- Negative payments
- Excessive decimal places
- Insufficient cash
- Excessively large payments
- Successful cash payments

It also provided testing instructions for the New Transaction function.

### My Evaluation

**Result: Correct for the identified validation improvement.**

The revised validation checks distinguish negative payments from other invalid input and preserve the existing checkout and receipt functionality.

### Modifications Made

I replaced the previous `confirmPayment()` function with the revised version, saved `script.js`, and followed the validation tests.

I recorded this change as a separate Git commit to document the debugging and improvement stage.

---

## Overall Evaluation of AI Assistance

ChatGPT supported the development of the Campus Bakery POS by providing project setup instructions, code suggestions, interface styling, functionality, debugging guidance, and documentation assistance.

The generated code was incorporated into the application through Visual Studio Code and reviewed during development.

The final application uses HTML, CSS, and JavaScript and implements the requirements for the assigned Campus Bakery POS scenario.

## Development Responsibility

AI was used as a development assistant. The project was assembled, tested, and managed through the development workflow, including local Git commits and GitHub repository updates.

The developer remains responsible for understanding the source code, verifying system behavior, correcting errors, and submitting the completed application.

## AI Interaction 4 — Minimalist UI Redesign

### Prompt Used

"before we will going to upload screenshots, first we will change the UI design, make it minimalist, trendy, and dont add too much icons, a unique website. tell me what to modify, edit, prompt in terminal. step by step."

### Purpose

To improve the original POS dashboard with a minimalist, modern bakery website design before capturing the final submission screenshots.

### AI Response

ChatGPT provided a redesigned HTML structure, a complete CSS stylesheet, instructions for adding bakery product images, and Git commands to protect and commit the changes.

### My Evaluation

**Result: Correct for the requested redesign, subject to final functional testing.**

The redesigned interface retained the existing JavaScript element IDs, allowing the product catalog, shopping cart, checkout, and receipt functions to remain connected.

### Modifications Made

I replaced the previous HTML and CSS, added product image references to JavaScript, created an images folder, and included bakery product photographs. I also created a Git backup branch before making changes and committed the redesigned application.