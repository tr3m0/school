function addToCart(p) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(p);
    localStorage.setItem("products", JSON.stringify(products));
}

function newProduct(p) {
    const container = document.createElement("div");
    const name = document.createElement("h1");
    const price = document.createElement("p");
    const cartBtn = document.createElement("button");

    name.textContent = p.name;
    price.textContent = "€" + p.price;
    cartBtn.textContent = "Aggiungi al carrello";
    cartBtn.onclick = () => {
        addToCart(p);
    };
    container.append(name, price, cartBtn);
    return container;
}

const PRODUCTS = [
    { name: "Notebook", price: 999.99 },
    { name: "Smartphone", price: 699.99 },
    { name: "Monitor", price: 199.99 },
    { name: "Tastiera meccanica", price: 79.99 },
    { name: "Mouse gaming", price: 49.99 },
    { name: "AirPods", price: 159.99 },
    { name: "Console portatile", price: 299.99 },
    { name: "Casco audio", price: 119.99 },
    { name: "Scheda grafica", price: 499.99 },
    { name: "Altoparlanti Bluetooth", price: 89.99 }
];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("products").append(...PRODUCTS.map(newProduct));
});

document.getElementById("cart").addEventListener("click", () => {
    window.location.href = "cart.html";
});