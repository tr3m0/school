const history = JSON.parse(localStorage.getItem("shop-history")) || [];

function productToNode(product) {
    const container = document.createElement("div");
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("span");

    container.className = "card";
    container.id = product.id;
    name.textContent = product.name;
    description.textContent = product.description;
    price.textContent = "€" + product.price;
    container.append(name, description, price);
    return container;
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    if (history.length === 0) {
        main.appendChild(document.createTextNode("The history is empty."))
    } else {
        history.map(productToNode).forEach(p => {
            main.appendChild(p);
        });
    }
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("shop-history", JSON.stringify(history));
});