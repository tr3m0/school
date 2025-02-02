function generateRecoveryCode() {
    let recoveryCode = '';
    for (let i = 0; i < 8; ++i) {
        recoveryCode += Math.floor(Math.random() * 10);
    }
    return recoveryCode;
}


document.addEventListener('DOMContentLoaded', () => {
    const recoveryCode = generateRecoveryCode();
    sessionStorage.setItem('recovery-code', recoveryCode);
    const recoveryCodeLabel = document.getElementById('recovery-code');
    recoveryCodeLabel.innerHTML = 'Il codice di recupero è <strong>' + recoveryCode + '</strong>.';

    const otpForm = document.querySelector('form');
    otpForm.style.display = 'none';

    setTimeout(() => {
        recoveryCodeLabel.hidden = true;
        otpForm.style.display = 'grid';
    }, 5_000);
});

function selectRandom(tokens, count) {
    let result = '';
    for (let i = 0; i < count; ++i) {
        result += tokens[Math.floor(Math.random() * tokens.length)];
    }
    return result;
}
function generatePassword() {
    const lowerChars = 'abcdefghijklmnopqrstuvxywz'
    const upperChars = lowerChars.toUpperCase();
    const numbers = '0123456789';
    return selectRandom(lowerChars, 5) + selectRandom(numbers, 2) + selectRandom(upperChars, 3);
}

document.getElementById('submit-recovery-code').addEventListener('click', event => {
    event.preventDefault();
    const recoveryCode = sessionStorage.getItem('recovery-code');
    const recoveryUser = JSON.parse(sessionStorage.getItem('recovery-user'));
    sessionStorage.removeItem('recovery-code');
    sessionStorage.removeItem('recovery-user');

    const recoveryCodeInput = document.getElementById('recovery-code-input').value.trim();
    if (recoveryCodeInput !== recoveryCode) {
        window.location.href = '../login/index.html';
        return;
    }

    const password = generatePassword();
    const users = JSON.parse(sessionStorage.getItem('users-db-data'));
    users.find(user => user.username === recoveryUser.username && user.email === recoveryUser.email).password = password;
    sessionStorage.setItem('users-db-data', JSON.stringify(users));

    sessionStorage.setItem('current-user', JSON.stringify({
        username: recoveryUser.username,
        email: recoveryUser.email,
        password: password
    }));

    window.location.href = '../dashboard/index.html';
});