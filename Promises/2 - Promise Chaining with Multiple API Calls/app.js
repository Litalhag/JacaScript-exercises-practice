//  URL
const url = "https://jsonplaceholder.typicode.com";
fetch(`${url}/users`)
  .then((response) => response.json())
  .then((users) => {
    const usersContainer = document.querySelector("#users");
    users.forEach((user) => {
      const userDiv = document.createElement("div"); // creating a div to each user
      userDiv.classList.add("user"); // adding class 'user' to this div
      userDiv.innerHTML = `
        <h2>${user.name}</h2> 
        <p><strong>Email:</strong> ${user.email}</p> 
        <div class="posts"></div>`;
      usersContainer.appendChild(userDiv);

      fetch(`${url}/posts?userId=${user.id}`)
        .then((response) => response.json())
        .then((posts) => {
          const postsContainer = userDiv.querySelector(".posts");
          postsContainer.innerHTML = "<h2>Posts:</h2>";
          posts.forEach((post) => {
            const postDiv = document.createElement("div"); // creating a div to each post of user
            postDiv.classList.add("post"); // adding class 'post' to this div
            postDiv.innerHTML = `<strong>${post.title}</strong> <br>${post.body}`;
            postsContainer.appendChild(postDiv);
          });
        })
        .catch((error) => console.error(error));
    });
  });
