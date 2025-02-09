const user = JSON.parse(localStorage.getItem("users"))
    .find(u => u.name === localStorage.getItem("current-user"));

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("current-user") === null) {
        window.location.href = "login.html";
        return;
    }
    document.getElementById("username").textContent = user.name;
    document.getElementById("completed").textContent = user.tasks.filter(t => t.completed).length.toString();
    document.getElementById("deleted").textContent = user.deleted.toString();
    document.getElementById("total").textContent = user.tasks.length.toString();
});

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("current-user");
    window.location.href = "login.html";
});
