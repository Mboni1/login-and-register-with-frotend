function toggleForm() {
    const isRegister = document.getElementById("form-title").innerText === "Register";
    document.getElementById("form-title").innerText = isRegister ? "Login" : "Register";
    document.getElementById("name").style.display = isRegister ? "none" : "block";
    document.querySelector("button").innerText = isRegister ? "Login" : "Sign Up";
    document.querySelector(".toggle").innerText = isRegister ? "Don't have an account? Register" : "Already have an account? Login";
}

function handleSubmit(event) {
    event.preventDefault();
    const isRegister = document.getElementById("form-title").innerText === "Register";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (isRegister) {
        console.log("Registering User: ", { name, email, password });
        alert("Registered successfully!");
    } else {
        console.log("Logging in User: ", { email, password });
        alert("Logged in successfully!");
    }
}