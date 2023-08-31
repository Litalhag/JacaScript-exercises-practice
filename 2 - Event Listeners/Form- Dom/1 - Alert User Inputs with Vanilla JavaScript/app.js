function showError(input, message) {
  const errorDiv = document.getElementById(input.id + "Error");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
  input.classList.add("error-input");
}

function hideError(input) {
  const errorDiv = document.getElementById(input.id + "Error");
  errorDiv.style.display = "none";
  input.classList.remove("error-input");
}

const form = document.querySelector("#modal-form");
const nicknameInput = document.querySelector("#nicknameInput");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");

// Gather inputs into an array
const inputFields = [nicknameInput, emailInput, passwordInput];

// Iterate over all inputs
inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error-input");

    // Remove any error message that was previously displayed.
    const errorDiv = document.getElementById(input.id + "Error");
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nicknameInput = document.querySelector("#nicknameInput");
  const emailInput = document.querySelector("#emailInput");
  const passwordInput = document.querySelector("#passwordInput");

  let isValid = true;

  if (nicknameInput.value.trim() === "") {
    showError(nicknameInput, "Nickname is required!");
    isValid = false;
  } else if (nicknameInput.value.trim().length < 3) {
    showError(nicknameInput, "Nickname should be at least 3 characters long!");
    isValid = false;
  } else {
    hideError(nicknameInput);
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required!");
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email");
  } else {
    hideError(emailInput);
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordInput.value.trim() === "") {
    showError(passwordInput, "Password is required!");
    isValid = false;
  } else if (!passwordPattern.test(passwordInput.value.trim())) {
    showError(
      passwordInput,
      "Password must contain at least 8 characters long, including lowercase, uppercase, numbers, and special character"
    );
    isValid = false;
  } else {
    hideError(passwordInput);
  }

  if (isValid) {
    alert(
      `Nickname: ${nicknameInput.value} \nEmail: ${emailInput.value} \nPassword: ${passwordInput.value}`
    );
  }
});
