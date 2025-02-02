const user = JSON.parse(sessionStorage.getItem('current-user'));

document.getElementById('username').textContent = user.username;
document.getElementById('password').textContent = user.password;

document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.removeItem('current-user');
    location.href = '../login/index.html';
});