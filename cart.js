document.addEventListener("DOMContentLoaded", function () {
  const cartList = document.getElementById("cartList");
  const clearCartButton = document.getElementById("clearCart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function displayCartItems() {
    cartList.innerHTML = ""; 
    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.price}`;
      cartList.appendChild(listItem);
    });
  }

  clearCartButton.addEventListener("click", function () {
    localStorage.removeItem("cart");
    cart = [];
    displayCartItems();
  });
    
  displayCartItems();
});
