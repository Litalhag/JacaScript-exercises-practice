const usersContainer = document.getElementById("users");
const errorMessage = document.getElementById("error");

const url = "https://jsonplaceholder.typicode.co";

fetch(`${url}/users`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error:${response.status} `);
    }
    return response.json();
  })
  .then((usersData) => {
    usersData.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `<h2>${user.name}</h2>
      <p><strong>Email: </strong>${user.email}</p>`;
      usersContainer.appendChild(userDiv);
    });
  })
  .catch((error) => {
    errorMessage.textContent = error.message;
    console.error(`there was an error: ${error.message}. Please try again`);
  });
