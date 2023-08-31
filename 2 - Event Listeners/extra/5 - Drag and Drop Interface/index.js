const item = document.querySelector("#item");

item.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text/plain", e.target.id);
});

const sourceBox = document.querySelector("#sourceBox");
const targetBox = document.querySelector("#targetBox");

sourceBox.addEventListener("dragover", function (e) {
  e.preventDefault(); // prevent default to allow drop
});

targetBox.addEventListener("dragover", function (e) {
  e.preventDefault(); // prevent default to allow drop
});

sourceBox.addEventListener("drop", dropHandler);
targetBox.addEventListener("drop", dropHandler);

function dropHandler(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain"); // Get the data (ID of the dragged item)
  const draggedItem = document.getElementById(data);
  e.target.appendChild(draggedItem); // Append the dragged item to the drop target
}
