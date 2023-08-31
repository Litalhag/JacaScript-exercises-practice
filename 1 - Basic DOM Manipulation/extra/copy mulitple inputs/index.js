const form = document.querySelector("#form");
const numList = document.querySelectorAll('#form input[type="text"]');
const hidCode = document.querySelector("#hid-code");
const visCode = document.querySelector("#vis-code");

function generateCode() {
  const characters =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // CR - make the code all lowercase
    code += characters.charAt(randomIndex).toLocaleLowerCase();
  }

  return code;
}

const sms = generateCode();
// CR - instead of the above function, you could also do this:
// const sms = Math.random().toString(36).slice(2, 8).toLowerCase();

console.log(sms);

visCode.value = sms;

numList[0].focus();

function fillCode(el) {
  // make sure if entered alphanumeric character
  if (/^[a-zA-Z0-9]$/.test(el.value)) {
    let combinedCode = Array.from(numList)
      .reduce((acc, input) => {
        return acc + input.value;
      }, "")
      .toLocaleLowerCase();

    // Assign the combined value to the hidden input
    hidCode.value = combinedCode;
    /*
      CR - If you have a variable that is being used just once, don't use a variable. instead do this:
         hidCode.value = Array.from(numList)
          .reduce((add, n) => add + n.value, "")
          .toLowerCase();
    */

    // CR - here you need to just do -
    el.nextElementSibling?.focus();
    // CR - read about Optional chaining:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

    // const currentIndex = Array.from(numList).indexOf(el);
    // if (currentIndex < numList.length - 1) {
    //   numList[currentIndex + 1].focus();
    // }
  } else {
    el.value = "";
    // CR - no need to alert
    // alert("Please enter an alphanumeric character.");
  }
}

function checkSubmit() {
  /// CR - this is what you needed to do:
  if (visCode.value !== hidCode.value) {
    return false;
  }
  form.submit();
  // if (visCode.value === sms) {
  //   form.submit();
  //   return true;
  // } else {
  //   alert("The entered code does not match. Please try again.");
  //   return false;
  // }
}

function checkValue(el) {
  if (/^[a-zA-Z0-9]$/.test(el.value)) {
    el.classList.remove("error");
  } else {
    el.classList.add("error");
  }
}

// CR - this is how we add the event listeners.
numList.forEach((el) => {
  el.addEventListener("keyup", (event) => fillCode(el));
  el.addEventListener("keyup", (event) => checkValue(el));
  el.addEventListener("keyup", (event) => checkSubmit());
});
