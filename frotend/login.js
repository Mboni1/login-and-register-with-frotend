document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});