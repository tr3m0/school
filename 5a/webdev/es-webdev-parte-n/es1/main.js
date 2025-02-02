class CoffeeMachine {
    constructor() {
        this._capsuleCount = 0;
        this._users = {};
    }

    get capsuleCount() {
        return this._capsuleCount;
    }

    addCapsules(n) {
        this._capsuleCount += n;
    }
    addUser(user) {
        this.#assert(user !== '', 'User is empty');
        this.#assert(!(user in this._users), "User already exists");
        this._users[user] = 0;
    }
    consume(count, user) {
        this.#assert(user in this._users, "User doesn't exist");
        this.#assert(count <= this._capsuleCount, "Not enough capsules");
        this._users[user] += count;
        this._capsuleCount -= count;
    }
    report(user) {
        this.#assert(user in this._users, "User doesn't exist");
        return this._users[user];
    }

    #assert(requirement, message) {
        if (!requirement) {
            throw new Error(message);
        }
    }
}

class Display {
    constructor() {
        this._totalCapsules = document.getElementById("total-capsules");
        this._logger = document.getElementById("logger");
    }

    set totalCapsules(value) {
        return this._totalCapsules.textContent = value;
    }

    report(user, count) {
        this._logger.textContent = user + "'s consumed capsules: " + count;
        this._logger.className = "report";
    }
    error(message) {
        this._logger.textContent = message;
        this._logger.className = "error";
    }
}

const coffeeMachine = new CoffeeMachine();
const display = new Display();

display.totalCapsules = coffeeMachine.capsuleCount;

function getCurrentUser() {
    return document.getElementById("input-user-id").value.trim();
}

document.getElementById("add-user").addEventListener("click", () => {
    try {
        const user = getCurrentUser();
        coffeeMachine.addUser(user);
        const consumed = coffeeMachine.report(user);
        display.report(user, consumed);
    } catch (e) {
        display.error(e.message);
    }
});

document.getElementById("get-coffee").addEventListener("click", () => {
    try {
        const user = getCurrentUser();
        coffeeMachine.consume(1, user);
        const consumed = coffeeMachine.report(user);
        display.report(user, consumed);
        display.totalCapsules = coffeeMachine.capsuleCount;
    } catch (e) {
        display.error(e.message);
    }
});

document.getElementById("capsule-load-trigger").addEventListener("click", () => {
    const newCapsules = document.getElementById("capsule-load-count");
    coffeeMachine.addCapsules(parseInt(newCapsules.value.trim() || "0"));
    display.totalCapsules = coffeeMachine.capsuleCount;
    newCapsules.value = '';
});