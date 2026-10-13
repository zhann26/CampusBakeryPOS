
"use strict";

// CAMPUS BAKERY POS — PRODUCT CATALOG


const products = [
  { id: 1, name: "Pandesal (pack of 5)", price: 25, image: "images/pandesal.jpg" },
  { id: 2, name: "Ensaymada", price: 20, image: "images/ensaymada.jpg" },
  { id: 3, name: "Spanish Bread", price: 15, image: "images/spanish-bread.jpg" },
  { id: 4, name: "Chocolate Cupcake", price: 30, image: "images/cupcake.jpg" },
  { id: 5, name: "Loaf Bread", price: 55, image: "images/loaf-bread.jpg" },
  { id: 6, name: "Brewed Coffee (cup)", price: 25, image: "images/coffee.jpg" }
];


let cart = [];
let paid = false;

const peso = amount =>
  "₱" + amount.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

// DISPLAY PRODUCTS

function showProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    
const image = document.createElement("img");
image.src = product.image;
image.alt = product.name;
image.className = "product-image";
image.loading = "lazy";

card.appendChild(image);


    const details = document.createElement("div");

    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = product.name;

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = peso(product.price);

    details.append(name, price);

    const button = document.createElement("button");
    button.className = "add-button";
    button.textContent = "+ Add to Cart";
    button.disabled = paid;
    button.onclick = () => addToCart(product.id);

    card.append(details, button);
    container.appendChild(card);
  });
}

// ADD PRODUCT TO CART

function addToCart(id) {
  if (paid) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    const product = products.find(p => p.id === id);
    if (!product) return;

    cart.push({ ...product, quantity: 1 });
  }

  showCart();
}

// CHANGE QUANTITY

function changeQuantity(id, amount) {
  if (paid) return;

  const item = cart.find(product => product.id === id);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeItem(id);
    return;
  }

  showCart();
}

// REMOVE PRODUCT

function removeItem(id) {
  if (paid) return;

  cart = cart.filter(item => item.id !== id);
  showCart();
}

// CALCULATE SUBTOTAL AND TOTAL

function getSubtotal(item) {
  return item.price * item.quantity;
}

function getTotal() {
  return cart.reduce(
    (sum, item) => sum + getSubtotal(item),
    0
  );
}

// DISPLAY SHOPPING CART

function showCart() {
  const container = document.getElementById("cart");
  container.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-cart";
    empty.textContent = "Your shopping cart is empty.";
    container.appendChild(empty);
  }

  cart.forEach(item => {
    const card = document.createElement("div");
    card.className = "cart-item";

    const header = document.createElement("div");
    header.className = "cart-item-header";

    const details = document.createElement("div");

    const name = document.createElement("div");
    name.className = "cart-item-name";
    name.textContent = item.name;

    const unitPrice = document.createElement("p");
    unitPrice.className = "cart-unit-price";
    unitPrice.textContent = peso(item.price) + " each";

    details.append(name, unitPrice);

    const subtotal = document.createElement("strong");
    subtotal.className = "cart-item-subtotal";
    subtotal.textContent = peso(getSubtotal(item));

    header.append(details, subtotal);
    card.appendChild(header);

    if (!paid) {
      const controls = document.createElement("div");
      controls.className = "cart-item-controls";

      const minus = document.createElement("button");
      minus.textContent = "−";
      minus.setAttribute("aria-label", "Decrease " + item.name);
      minus.onclick = () => changeQuantity(item.id, -1);

      const quantity = document.createElement("span");
      quantity.className = "quantity-label";
      quantity.textContent = item.quantity;

      const plus = document.createElement("button");
      plus.textContent = "+";
      plus.setAttribute("aria-label", "Increase " + item.name);
      plus.onclick = () => changeQuantity(item.id, 1);

      const remove = document.createElement("button");
      remove.className = "remove-button";
      remove.textContent = "Remove";
      remove.onclick = () => removeItem(item.id);

      controls.append(minus, quantity, plus, remove);
      card.appendChild(controls);
    } else {
      const quantity = document.createElement("p");
      quantity.className = "cart-unit-price";
      quantity.textContent = "Quantity: " + item.quantity;
      card.appendChild(quantity);
    }

    container.appendChild(card);
  });

  document.getElementById("total").textContent =
    peso(getTotal());
}

// PAYMENT VALIDATION AND CONFIRMATION
 
function confirmPayment() {
  const message = document.getElementById("message");
  const cashInput = document.getElementById("cash");
  const raw = cashInput.value.trim();
  const total = getTotal();

  message.style.color = "#dc3545";
  message.textContent = "";

  if (paid) {
    message.textContent = "Transaction already completed.";
    return;
  }

  if (cart.length === 0) {
    message.textContent = "Please add products first.";
    return;
  }

  if (raw === "") {
    message.textContent = "Please enter the cash amount.";
    return;
  }

  const cash = Number(raw);

  if (!Number.isFinite(cash)) {
    message.textContent = "Invalid payment amount.";
    return;
  }

  if (cash < 0) {
    message.textContent = "Payment cannot be negative.";
    return;
  }

  if (!/^\d+(\.\d{1,2})?$/.test(raw)) {
    message.textContent =
      "Enter a valid amount with up to 2 decimal places.";
    return;
  }

  if (cash > 1000000) {
    message.textContent =
      "Payment exceeds the allowed maximum of ₱1,000,000.00.";
    return;
  }

  const cashCents = Math.round(cash * 100);
  const totalCents = Math.round(total * 100);

  if (cashCents < totalCents) {
    message.textContent = "Insufficient payment.";
    return;
  }

  const change = (cashCents - totalCents) / 100;

  paid = true;
  cashInput.disabled = true;
  document.getElementById("payBtn").disabled = true;

  message.style.color = "#16804a";
  message.textContent = "Payment successful!";

  generateReceipt(cashCents / 100, change);
  showCart();
  showProducts();

  document.getElementById("receipt-section")
    .scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
}


// GENERATE DIGITAL RECEIPT

function generateReceipt(cash, change) {
  const reference = "CB-" + Date.now();
  const date = new Date().toLocaleString("en-PH");

  const lines = [
    "CAMPUS BAKERY",
    "DIGITAL RECEIPT",
    "",
    "Reference: " + reference,
    "Date: " + date,
    "--------------------------------"
  ];

  cart.forEach(item => {
    lines.push(
      item.name + " × " + item.quantity,
      peso(item.price) + " each = " + peso(getSubtotal(item))
    );
  });

  lines.push(
    "--------------------------------",
    "TOTAL: " + peso(getTotal()),
    "CASH: " + peso(cash),
    "CHANGE: " + peso(change),
    "",
    "PAYMENT CONFIRMED",
    "Thank you for your purchase!",
    "Please keep this receipt for your records."
  );

  document.getElementById("receipt").textContent =
    lines.join("\n");
}

// RESET FOR A NEW TRANSACTION

function newTransaction() {
  cart = [];
  paid = false;

  const cashInput = document.getElementById("cash");
  cashInput.value = "";
  cashInput.disabled = false;

  document.getElementById("payBtn").disabled = false;

  const message = document.getElementById("message");
  message.textContent = "";

  document.getElementById("receipt").textContent =
    "No completed transaction.";

  showCart();
  showProducts();
}

// INITIALIZE APPLICATION

document.getElementById("payBtn").onclick = confirmPayment;
document.getElementById("newBtn").onclick = newTransaction;

showProducts();
showCart();
