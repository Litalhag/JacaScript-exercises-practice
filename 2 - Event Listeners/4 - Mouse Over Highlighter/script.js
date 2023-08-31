const highlightP = document.querySelectorAll(".highlightable");

//  when the mouse over the p
highlightP.forEach(function (paragraph) {
  paragraph.addEventListener("mouseover", function () {
    this.classList.add("highlighted"); // adding highlighted class to p
  });

  //  when mouse leaves the p
  paragraph.addEventListener("mouseout", function () {
    this.classList.remove("highlighted"); // remove the highlighted class from p
  });
});
