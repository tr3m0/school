function assert(requirement, message) {
    if (!requirement) {
        throw new Error(message);
    }
}

class User {
    constructor(username, email) {
        assert(username !== '', 'Username vuoto');
        assert(email !== '', 'Email vuota');
        this.username = username;
        this.email = email;
        this.password = this.#generatePassword();
    }

    #selectRandom(tokens, count) {
        let result = '';
        for (let i = 0; i < count; ++i) {
            result += tokens[Math.floor(Math.random() * tokens.length)];
        }
        return result;
    }
    #generatePassword() {
        const lowerChars = 'abcdefghijklmnopqrstuvxywz'
        const upperChars = lowerChars.toUpperCase();
        const numbers = '0123456789';
        return this.#selectRandom(lowerChars, 5) + this.#selectRandom(numbers, 2) + this.#selectRandom(upperChars, 3);
    }
}

class UsersDatabase {
    constructor() {
        this._data = JSON.parse(sessionStorage.getItem('users-db-data') || '[]');
        document.addEventListener('beforeunload', () => this.flush());
    }

    exists(username, email) {
        return this._data.find(user => {
            return user.username === username && user.email === email;
        }) !== undefined;
    }
    query(username, email, password) {
        assert(username !== '', 'Username vuoto');
        assert(email !== '', 'Email vuota');
        assert(password !== '', 'Password vuota');

        const user = this._data.find(storedUser => {
            return storedUser.username === username && storedUser.email === email && storedUser.password === password
        });
        assert(user !== undefined, 'Credenziali non valide');

        return user;
    }
    store(newUser) {
        assert(this._data.find(storedUser => {
            return storedUser.username === newUser.username && storedUser.email === newUser.email;
        }) === undefined, 'Utente già esistente');
        this._data.push(newUser);
    }
    flush() {
        sessionStorage.setItem('users-db-data', JSON.stringify(this._data));
    }
}

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const users = new UsersDatabase();

function formCallback(userSupplier) {
    const error = document.getElementById('error');
    return event => {
        event.preventDefault();
        try {
            const user = userSupplier();
            sessionStorage.setItem('current-user', JSON.stringify(user));
            users.flush();
            window.location.href = '../dashboard/index.html';
        } catch (e) {
            error.textContent = e.message;
            error.hidden = false;
        }
    };
}

document.getElementById('login').addEventListener('click', formCallback(
    () => users.query(username.value.trim(), email.value.trim(), password.value.trim())
));

document.getElementById('signin').addEventListener('click', formCallback(
    () => {
        const user = new User(username.value.trim(), email.value.trim());
        users.store(user);
        return user;
    }
));

document.getElementById('password-recovery').addEventListener('click', () => {
    if (!users.exists(username.value.trim(), email.value.trim())) {
        const error = document.getElementById('error');
        error.textContent = 'Credenziali non valide';
        error.hidden = false;
        return;
    }
    sessionStorage.setItem('recovery-user', JSON.stringify({
        username: username.value.trim(),
        email: email.value.trim()
    }));
    window.location.href = '../otp/index.html';
});