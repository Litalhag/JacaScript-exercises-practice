const contextMenu = document.querySelector("#contextMenu");

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();

  contextMenu.style.left = event.pageX + "px";
  contextMenu.style.top = event.pageY + "px";
  contextMenu.style.display = "block";
});

document.addEventListener("click", function () {
  contextMenu.style.display = "none";
});

// Click listener for "View Details"
document.querySelector("#viewDetails").addEventListener("click", function () {
  alert("View details clicked");
});

// Click listener for "Copy Text"
document.querySelector("#copyText").addEventListener("click", function () {
  alert("Copy text clicked");
});
