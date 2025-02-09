document.querySelector("form").addEventListener("submit", event => {
    const username = document.getElementById("username").value.trim();
    localStorage.setItem("user", username);
});