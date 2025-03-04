const nums = JSON.parse(localStorage.getItem("numbers")) || [];

const count = nums.length;
const sum = nums.reduce((prev, curr) => prev + curr);
const avg = sum / count;
const min = nums.reduce((prev, curr) => prev < curr ? prev : curr);
const max = nums.reduce((prev, curr) => prev > curr ? prev : curr);

document.getElementById("count").textContent = count;
document.getElementById("sum").textContent = sum;
document.getElementById("avg").textContent = avg;
document.getElementById("min").textContent = min;
document.getElementById("max").textContent = max;

document.getElementById("go-back").addEventListener("click", () => {
    window.location.href = "index.html";
});