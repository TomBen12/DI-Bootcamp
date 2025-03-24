const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const login = async () => {
  const user = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  try {
    const response = await fetch("/umapi/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const result = await response.json();

    if (response.ok) {
      displayMessage(result.message);
      loginForm.reset();
    } else {
      displayMessage(result.message);
    }
  } catch (error) {
    displayMessage("Can't login");
    console.error("Login error:", error);
  }
};

const displayMessage = (msg) => {
  const messageBox = document.getElementById("message-box");
  messageBox.style.display = "block";
  messageBox.textContent = msg;
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});
