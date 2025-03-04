function storeNumber(n) {
    const nums = JSON.parse(localStorage.getItem("numbers")) || [];
    nums.push(n);
    localStorage.setItem("numbers", JSON.stringify(nums));
}

function newButton(n) {
    const btn = document.createElement("button");
    btn.textContent = String(n);
    btn.onclick = () => {
        storeNumber(n);
    };
    return btn;
}

document.getElementById("button-count").addEventListener("input", e => {
    const container = document.getElementById("buttons");
    container.innerHTML = "";
    for (let i = 1; i <= e.target.value; ++i) {
        container.appendChild(newButton(i));
    }
});

document.getElementById("stats").addEventListener("click", () => {
    window.location.href = "stats.html";
});

document.getElementById("reset").addEventListener("click", () => {
    localStorage.removeItem("numbers");
})