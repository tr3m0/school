const products = [
    {
        id: "<id>",
        name: "<name>",
        description: "<description>",
        price: 123
    }
];

const cart = JSON.parse(localStorage.getItem("shop-cart") || "[]");

function productToNode(product) {
    const container = document.createElement("div");
    const name = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("span");
    const addToCart = document.createElement("button");

    container.className = "card";
    container.id = product.id;
    name.textContent = product.name;
    description.textContent = product.description;
    price.textContent = "€" + product.price;
    addToCart.textContent = "Add to cart";
    addToCart.onclick = () => {
        cart.push(product);
    };
    price.appendChild(addToCart);
    container.append(name, description, price);
    return container;
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    products.map(productToNode).forEach(p => {
        main.appendChild(p);
    });
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("shop-cart", JSON.stringify(cart));
})