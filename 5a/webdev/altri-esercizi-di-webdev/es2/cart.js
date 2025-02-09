const history = JSON.parse(localStorage.getItem("shop-history")) || [];
const cart = JSON.parse(localStorage.getItem("shop-cart")) || [];

function productToNode(product) {
    const container = document.createElement("div");
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("span");
    const buy = document.createElement("button");
    const deleter = document.createElement("button");

    container.className = "card";
    container.id = product.id;
    name.textContent = product.name;
    description.textContent = product.description;
    price.textContent = "€" + product.price;
    buy.textContent = "Buy";
    buy.onclick = () => {
        history.push(product);
        const index = cart.findIndex(p => p === product);
        cart.splice(index, 1);
        container.parentElement.removeChild(container);
    };
    deleter.textContent = "Delete";
    deleter.onclick = () => {
        const index = cart.findIndex(p => p === product);
        cart.splice(index, 1);
        container.parentElement.removeChild(container);
    };
    price.appendChild(buy);
    price.appendChild(deleter);
    container.append(name, description, price);
    return container;
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    if (cart.length === 0) {
        main.appendChild(document.createTextNode("The cart is empty."))
    } else {
        cart.map(productToNode).forEach(p => {
            main.appendChild(p);
        });
    }
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("shop-history", JSON.stringify(history));
    localStorage.setItem("shop-cart", JSON.stringify(cart));
});