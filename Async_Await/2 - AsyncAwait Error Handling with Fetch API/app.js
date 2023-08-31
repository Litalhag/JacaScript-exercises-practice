const usersContainer = document.getElementById("users");
const errorMessage = document.getElementById("error");

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchUser() {
  try {
    let response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let users = await response.json();

    users.forEach(async (user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
          <h2>${user.name}</h2> 
          <p><strong>Email:</strong> ${user.email}</p> 
          <div class="posts"></div>`;
      usersContainer.appendChild(userDiv);
    });

    return users;
  } catch (error) {
    console.error("There was an error fetching the users:", error);
    errorMessage.textContent = error.message;
  }
}

fetchUser();
