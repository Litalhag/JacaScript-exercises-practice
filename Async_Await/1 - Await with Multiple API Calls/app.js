const userDiv = document.createElement("div");
userDiv.classList.add("user");

const postDiv = document.createElement("div");
postDiv.classList.add("post");

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchUser() {
  try {
    let response = await fetch(`${BASE_URL}/users`);
    let users = await response.json();
    return users;
  } catch (error) {
    console.error("There was an error fetching the users:", error);
  }
}

async function fetchPost(userId) {
  try {
    let response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    let posts = await response.json();
    return posts;
  } catch (error) {
    console.error("There was an error fetching posts:", error);
  }
}

async function displayUserAndPost() {
  const usersContainer = document.querySelector("#users"); // Reference to main users container

  try {
    let users = await fetchUser();
    users.forEach(async (user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
        <h2>${user.name}</h2> 
        <p><strong>Email:</strong> ${user.email}</p> 
        <div class="posts"></div>`;
      usersContainer.appendChild(userDiv);

      const postsContainer = userDiv.querySelector(".posts");

      try {
        let posts = await fetchPost(user.id);
        posts.forEach((post) => {
          const postDiv = document.createElement("div");
          postDiv.classList.add("post");
          postDiv.innerHTML = `<strong>${post.title}</strong> <br>${post.body}`;
          postsContainer.appendChild(postDiv);
        });
      } catch (error) {
        console.error(
          `There was an error fetching posts for user ${user.id}:`,
          error
        );
      }
    });
  } catch (error) {
    console.error("There was an error fetching the users:", error);
  }
}

displayUserAndPost();
