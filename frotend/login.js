document.getElementById('login-header').addEventListener('submit', function (event) {
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
    