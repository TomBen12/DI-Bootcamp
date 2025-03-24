const registerForm = document.getElementById("register-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");

const register = async () => {
  const user = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
    email: emailInput.value.trim(),
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
  };
  try {
    const response = await fetch("/umapi/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    if (response.ok) {
      displayMessage(result.message);
      registerForm.reset();
    } else {
      displayMessage(result.message);
    }
  } catch (error) {
    displayMessage("Can't register");
    console.error("Register error:", error);
  }
};

const displayMessage = (msg) => {
  const messageBox = document.getElementById("message-box");
  messageBox.style.display = "block";
  messageBox.textContent = msg;
};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});
