const clickButton = document.querySelector("#clickButton");
const countDisplay = document.querySelector("#counter");
const container = document.querySelector(".container");

let count = 0;

clickButton.addEventListener("click", function () {
  count++;
  countDisplay.innerHTML = count;
});

// reset button
const resetButton = document.createElement("button"); // new button element

resetButton.innerHTML = "Reset"; // button's text

resetButton.style.cssText = clickButton.style.cssText; // Copying the style from existing btn

container.appendChild(resetButton); // Append the reset btn to container

resetButton.addEventListener("click", function () {
  count = 0;
  countDisplay.innerHTML = count;
});
