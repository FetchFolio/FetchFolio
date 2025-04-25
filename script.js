// Simple cart counter (future-ready)
let cartCount = 0;
const cartDisplay = document.querySelector(".cart");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = `🛒 Cart (${cartCount})`;
    alert("Item added to cart!");
  });
});
