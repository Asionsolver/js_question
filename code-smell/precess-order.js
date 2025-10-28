// ! Smelly code example: A function that does too many things

// function processOrder(order) {
//   if (!order || !order.items || order.items.length === 0) {
//     console.log("Invalid order");
//     return null;
//   }

//   let subtotal = 0;
//   for (let item of order.items) {
//     subtotal += item.price * item.quantity;
//   }

//   const taxRate = 0.15;
//   const tax = subtotal * taxRate;
//   const discount = order.coupon ? subtotal * 0.1 : 0;
//   const total = subtotal + tax - discount;

//   for (let item of order.items) {
//     console.log("Update stock for", item.id);
//   }

//   console.log("Sending email to ", order.customerEmail);

//   console.log("Order processed ", { orderId: order.id, total });

//   return { orderId: order.id, total };
// }

// * Clean code example: Refactored into smaller functions

const TAX_RATE = 0.15;
const DISCOUNT_RATE = 0.1;

function validateOrder(order) {
  return order && order.items && order.items.length > 0;
}

function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateTax(subtotal, taxRate = TAX_RATE) {
  return subtotal * taxRate;
}

function calculateDiscount(subtotal, hasCoupon) {
  return hasCoupon ? subtotal * DISCOUNT_RATE : 0;
}

function updateStock(items) {
  for (let item of items) {
    console.log("Update stock for", item.id);
  }
}

function sendConfirmationEmail(email) {
  console.log("Sending email to ", email);
}

function processOrder(order) {
  if (!validateOrder(order)) {
    console.log("Invalid order");
    return null;
  }

  const subtotal = calculateSubtotal(order.items);
  const tax = calculateTax(subtotal, TAX_RATE);
  const discount = calculateDiscount(subtotal, order.coupon);
  const total = subtotal + tax - discount;

  updateStock(order.items);
  sendConfirmationEmail(order.customerEmail);
  console.log("Order processed ", { orderId: order.id, total });
  return { orderId: order.id, total };
}

const sampleOrder = {
  id: 123,
  customerEmail: "customer@example.com",
  coupon: true,
  items: [
    { id: 1, name: "Item 1", price: 899, quantity: 2 },
    { id: 2, name: "Item 2", price: 2999, quantity: 1 },
    { id: 3, name: "Item 3", price: 499, quantity: 3 },
  ],
};

processOrder(sampleOrder);
