class Pizza {
    constructor(name, size, isHot) {
        this.name = name;
        this.size = size;
        this.isHot = isHot;
    }
}

document.getElementById("prepare").addEventListener("click", () => {
    document.body.textContent = "Preparing...";
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("The cook is sleeping"));
            } else {
                resolve(new Pizza("Wurstel", 10, false /*Terrible cook!*/));
            }
        }, 2000);
    })
        .then((pizza) => {
            document.body.textContent = pizza.size + " slices of pizza " + pizza.name + " served " + (pizza.isHot ? "hot" : "cold");
        })
        .catch((error) => {
            document.body.textContent = "Error: " + error.message;
        });
});