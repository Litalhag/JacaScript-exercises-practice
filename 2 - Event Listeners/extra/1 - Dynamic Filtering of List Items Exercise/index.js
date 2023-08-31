// const categoryElement = document.querySelector(
//   '.category[data-category="fruits"]'
// );
// const categoryValue = categoryElement.dataset.category; // "fruits"

const data = {
  fruits: ["Apple", "Banana", "Cherry"],
  vegetables: ["Carrot", "Broccoli", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
};

const categories = document.querySelector("#categories");
const itemsContainer = document.querySelector("#items");

categories.addEventListener("click", function (event) {
  // checking if the clicked element has a 'category' class
  if (event.target.classList.contains("category")) {
    // determine which category was clicked
    const targetCategory = event.target.dataset.category;
    // Retrieve the chosen item
    const items = data[targetCategory];
    // Clear existing items
    itemsContainer.innerHTML = "";

    // looping through items and append to the container
    items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";
      itemDiv.textContent = item;
      itemsContainer.appendChild(itemDiv);
    });
  }
});
