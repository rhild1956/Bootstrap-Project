// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Check if the name is already stored in local storage
    const storedName = localStorage.getItem("userName");
    if (storedName) {
        displayWelcomeMessage(storedName);
    } else {
        askForName(); // Ask for name when entering the website
    }
});

function askForName() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        // Store the name in local storage
        localStorage.setItem("userName", userName);
        displayWelcomeMessage(userName);
    }
}

function displayWelcomeMessage(name) {
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = `Welcome, ${name}!`;
    document.body.appendChild(welcomeMessage);
}
