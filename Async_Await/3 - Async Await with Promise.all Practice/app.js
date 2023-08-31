const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error);
    errorMessage.textContent = error.message;
  }
}

async function displayData() {
  const usersContainer = document.querySelector("#users");
  const postsContainer = document.querySelector("#posts");

  try {
    const [users, posts] = await Promise.all([
      fetchData(usersURL),
      fetchData(postsURL),
    ]);

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `
              <h2>${user.name}</h2> 
              <p><strong>Email:</strong> ${user.email}</p>`;
      usersContainer.appendChild(userDiv);
    });

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("item");
      postDiv.innerHTML = `<strong>${post.title}</strong> <br>${post.body}`;
      postsContainer.appendChild(postDiv);
    });
  } catch (error) {
    const errorContainer = document.getElementById("error");
    errorContainer.textContent = `An error occurred: ${error.message}. Please try again later.`;
    console.error("Error in displayData:", error);
  }
}

displayData();
