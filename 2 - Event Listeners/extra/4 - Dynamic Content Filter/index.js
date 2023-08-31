const filterInput = document.querySelector("#filterInput");

filterInput.addEventListener("keyup", function () {
  filterItems(this.value); // gets the current text from the input field
});

function filterItems(query) {
  const itemList = document.querySelector("#itemList");
  const items = itemList.getElementsByTagName("li");
  const text = query.toLowerCase();

  for (let item of items) {
    const itemText = item.textContent.toLocaleLowerCase();
    if (itemText.indexOf(text) !== -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}
