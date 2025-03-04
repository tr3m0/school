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

const BUTTON_COUNT = 10;
const container = document.getElementById("buttons");
for (let i = 0; i < BUTTON_COUNT; ++i) {
    container.appendChild(newButton(i));
}

document.getElementById("stats").addEventListener("click", () => {
    window.location.href = "stats.html";
});