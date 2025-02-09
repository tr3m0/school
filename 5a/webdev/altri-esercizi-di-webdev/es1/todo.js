function addTasks(tasks) {
    const todos = document.getElementById("todos-list");
    tasks.map(task => {
        const container = document.createElement("li");
        container.className = "todo";

        const status = document.createTextNode(task.completed ? "COMPLETED" : "NOT COMPLETED");
        container.append(task.name, "\t[", status, "]");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            container.remove()
            const index = user.tasks.map(t => t.name).indexOf(name);
            user.tasks.splice(index, 1);
            user.deleted++;
        };
        container.appendChild(deleteButton);

        if (!task.completed) {
            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            completeButton.onclick = () => {
                task.completed = true;
                status.textContent = "COMPLETED";
                container.removeChild(completeButton);
            };
            container.appendChild(completeButton);
        }

        return container;
    }).forEach(task => todos.appendChild(task));
}

const user = JSON.parse(localStorage.getItem("users"))
    .find(u => u.name === localStorage.getItem("current-user"));

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("current-user") === null) {
        window.location.href = "login.html";
        return;
    }
    document.getElementById("username").textContent = user.name;
    addTasks(user.tasks);
});
window.addEventListener("beforeunload", () => {
    localStorage.setItem("users", JSON.stringify(users));
});

document.getElementById("add-new-todo").addEventListener("submit", event => {
    event.preventDefault();
    const task = {
        name: document.getElementById("task-name").value.trim(),
        completed: false
    };
    user.tasks.push(task);
    addTasks([task]);
});

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("current-user");
    window.location.href = "login.html";
});
