document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".catalog .card");

  function addToCart(card) {
    const itemName = card.querySelector(".card-text p").textContent;
    const itemPrice = card.querySelector(".price").textContent;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name: itemName, price: itemPrice });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Товар додано до корзини!");
  }

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      addToCart(card);
    });
  });
});
