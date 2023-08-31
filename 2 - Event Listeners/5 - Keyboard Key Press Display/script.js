const displayKey = document.querySelector("#keyDisplay");

document.addEventListener("keydown", function (e) {
  let key = e.key;

  if (key === " ") {
    key = "space";
  }

  displayKey.textContent = key;
});
