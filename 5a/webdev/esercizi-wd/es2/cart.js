function removeFromCart(p) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.remove(p);
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
        addToCart(p);
    };
    container.append(name, price);
    return container;
}