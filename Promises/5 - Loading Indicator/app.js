const usersUrl = "https://jsonplaceholder.typicode.com/users";
const usersPromise = fetch(usersUrl).then((response) => response.json());

const container = document.querySelector(".container");
const loadingIndicator = document.querySelector("#loading-indicator");
loadingIndicator.style.display = "block";

fetch(usersUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Iterate through the users' data and display it
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      container.appendChild(userDiv);
    });

    // Hide the loading indicator after processing the data
    loadingIndicator.style.display = "none";
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation", error);

    loadingIndicator.style.display = "none";

    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Failed to load data. Please try again";
    container.appendChild(errorMessage);
  });
