// =========================
// DOM elements
// =========================
const actionButton = document.getElementById("actionButton");
const message = document.getElementById("message");
const currentYear = document.getElementById("currentYear");

// =========================
// Interactive behavior
// =========================
function handleButtonClick() {
    message.textContent = "Success! JavaScript is working correctly.";
}

actionButton.addEventListener("click", handleButtonClick);

// =========================
// Footer
// =========================
currentYear.textContent = new Date().getFullYear();
