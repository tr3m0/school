function removeFromCart(p) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.pop(p);
    localStorage.setItem("products", JSON.stringify(products));
}

function newProduct(p) {
    const container = document.createElement("div");
    const name = document.createElement("h1");
    const price = document.createElement("p");
    const removeBtn = document.createElement("button");

    name.textContent = p.name;
    price.textContent = p.price;
    removeBtn.textContent = "Rimuovi dal carrello";
    removeBtn.onclick = () => {
        removeFromCart(p);
        container.parentElement.removeChild(container);
    };
    container.append(name, price, removeBtn);
    return container;
}

const container = document.getElementById("cart-content");

const cartContent = JSON.parse(localStorage.getItem("products")) || [];
cartContent.map(newProduct).forEach(node => {
    container.appendChild(node);
});

document.getElementById("reset").addEventListener("click", () => {
    localStorage.removeItem("products");
    container.innerHTML = "";
});
document.getElementById("shop").addEventListener("click", () => {
    window.location.href = "index.html";
});