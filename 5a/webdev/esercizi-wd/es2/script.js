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
    price.textContent = p.price;
    cartBtn.textContent = "Aggiungi al carrello";
    cartBtn.onclick = () => {
        addToCart(p);
    };
    container.append(name, price);
    return container;
}

const PRODUCTS = [
    { nome: "Notebook", prezzo: 999.99 },
    { nome: "Smartphone", prezzo: 699.99 },
    { nome: "Monitor", prezzo: 199.99 },
    { nome: "Tastiera meccanica", prezzo: 79.99 },
    { nome: "Mouse gaming", prezzo: 49.99 },
    { nome: "AirPods", prezzo: 159.99 },
    { nome: "Console portatile", prezzo: 299.99 },
    { nome: "Casco audio", prezzo: 119.99 },
    { nome: "Scheda grafica", prezzo: 499.99 },
    { nome: "Altoparlanti Bluetooth", prezzo: 89.99 }
];

const productsPane = document.getElementById("products");
PRODUCTS.map(newProduct).forEach(node => {
    productsPane.appendChild(node);
});