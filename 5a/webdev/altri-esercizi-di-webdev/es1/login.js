const users = JSON.parse(localStorage.getItem("users")) || [];

// if a previous user didn't logout load it into the form
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("input[name=username]").textContent = localStorage.getItem("current-user") || "";
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("users", JSON.stringify(users));
});

function login() {
    const error = document.getElementById("error");
    const input = document.getElementById("username");
    const username = input.value.trim();
    const userExists = users.map(user => user.name).includes(username);

    if (!userExists) {
        error.textContent = "User is not registered";
        error.hidden = false;
        return;
    }

    localStorage.setItem("current-user", username);
    window.location.href = "todo.html";
}
function submit() {
    const error = document.getElementById("error");
    const input = document.getElementById("username");
    const username = input.value.trim();
    const userExists = users.map(user => user.name).includes(username);

    if (userExists) {
        error.textContent = "User already exists";
        error.hidden = false;
        return;
    }

    users.push({
        name: username,
        tasks: [],
        deleted: 0,
    });

    localStorage.setItem("current-user", username);
    window.location.href = "todo.html";
}

document.getElementById("login-form").addEventListener("submit", event => {
    event.preventDefault();
    if (event.submitter.id === "login") {
        login(event);
    } else if (event.submitter.id === "signin") {
        submit(event);
    }
});
