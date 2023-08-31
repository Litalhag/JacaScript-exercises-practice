let answers = document.querySelectorAll(".faq-item");

answers.forEach((event) => {
  event.addEventListener("click", function () {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});
