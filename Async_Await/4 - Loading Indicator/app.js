const container = document.querySelector(".container");
const loadingIndicator = document.querySelector("#loading-indicator");

const userURL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  loadingIndicator.style.display = "block";

  try {
    let response = await fetch(userURL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let users = await response.json();
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      container.appendChild(userDiv);
    });

    return users;
  } catch (error) {
    console.error("There was an error fetching the users:", error);
    //  ensures that the loading indicator is always hidden
  } finally {
    loadingIndicator.style.display = "none";
  }
}

fetchUsers();
