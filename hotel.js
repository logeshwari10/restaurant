const cartList = document.getElementById("cartList");
const emptyText = document.getElementById("emptyText");

function updateEmptyText() {
  emptyText.style.display = cartList.children.length === 0 ? "block" : "none";
}

document.getElementById("scrollMenuBtn").addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".add").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.dataset.item;

    const li = document.createElement("li");
    li.className = "cartItem";
    li.innerHTML = `
      <span>${item}</span>
      <button class="smallBtn">Remove</button>
    `;

    li.querySelector(".smallBtn").addEventListener("click", () => {
      li.remove();
      updateEmptyText();
    });

    cartList.appendChild(li);
    updateEmptyText();
  });
});

document.getElementById("clearBtn").addEventListener("click", () => {
  cartList.innerHTML = "";
  updateEmptyText();
});

updateEmptyText();
