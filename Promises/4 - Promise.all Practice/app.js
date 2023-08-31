const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";

const usersPromise = fetch(usersUrl).then((response) => response.json());
const postsPromise = fetch(postsUrl).then((response) => response.json());

Promise.all([usersPromise, postsPromise]).then(([users, posts]) => {
  const usersContainer = document.querySelector("#users");
  const postsContainer = document.querySelector("#posts");

  // Handle users' data
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("item");
    userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
    usersContainer.appendChild(userDiv);
  });

  // Handle posts' data
  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("item");
    postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
    postsContainer.appendChild(postDiv);
  });
});
