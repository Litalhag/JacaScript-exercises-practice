// const toggleBtn = document.querySelector("toggleButton");

// function toggleBackgroundColor() {
//   if (document.body.classList.contains("dark")) {
//     document.body.classList.remove("dark");
//   } else {
//     document.body.classList.add("dark");
//   }
// }
const toggleBtn = document.querySelector("#toggleButton");

function toggleBackgroundColor() {
  document.body.classList.toggle("dark");
}

toggleBtn.addEventListener("click", toggleBackgroundColor);
