import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import "../data/cart-classs.js";
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
