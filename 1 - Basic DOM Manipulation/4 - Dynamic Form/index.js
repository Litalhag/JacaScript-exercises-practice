let index = 0;

function addField() {
  const sentences = ["Enter your first name", "Enter your last name"];
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = sentences[index];
  index++;
  if (index >= sentences.length) {
    index = 0;
  }
  const formContainer = document.getElementById("dynamicForm");
  formContainer.append(input);
}

// document
//   .querySelector("#dynamicForm > button")
//   .addEventListener("click", addField);

function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  let allFilled = true;
  let message = "";

  inputs.forEach((input) => {
    // Iterate each input field
    if (input.value === "") {
      // in case the input doesn't have a value
      allFilled = false; // if input is empty- allFilled = false
    } else {
      message += input.value + " "; // each input = the message string
    }
  });

  if (allFilled) {
    alert(`Thank you ${message}, you had submitted!`);
  } else {
    alert("Please fill in all the fields");
  }
}

// document
//   .querySelector("#dynamicForm > button[type='button']")
//   .addEventListener("click", submitForm); // Adding eventListener to Submit button
