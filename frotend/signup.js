const form = document.getElementById("form")
const firstname_input = document.getElementById("firstname-input")
const email_input = document.getElementById("email-input")
const password_input = document.getElementById("password-input")
const reapeat_password_input = document.getElementById("reapeat-password")
const error_message = document.getElementById('error-message')
form.addEventListener('submit', (e) => {
    // e.preventDefault() Prevent Submit
    let errors = []

    if (firstname_input) {
        // if  we have a firstname input then we are in the signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, reapeat_password_input.value)
    }
    else {
        // if we don't have a firstname input then we are in the login
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }
    if (errors.length > 0) {
        // if there are any errors
        e.preventDefault()
        error_message.innerText = errors.join(".")
    }
})
function getSignupFormErrors(firstname, email, password, reapetPassword) {
    let errors = []

    if (firstname === '' || firstname == null) {
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if (email === '' || email == null) {
        errors.push(' Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null) {
        errors.push('password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password !== reapetPassword) {
        errors.push('password does not match reapted password')
        password_input.parentElement.classList.add('incorrect')
        reapeat_password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}

const allInputs = [firstname_input, email_input, password_input, reapeat_password_input]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})
document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});