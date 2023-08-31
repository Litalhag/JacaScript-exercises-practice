const sectionsText = document.querySelectorAll(".text");

window.addEventListener("scroll", function () {
  sectionsText.forEach(function (element) {
    const boundingPage = element.getBoundingClientRect();
    if (boundingPage.top <= window.innerHeight * 0.7) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
});
