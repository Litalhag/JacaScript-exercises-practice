const GITHUB_API_URL = "https://api.github.com/users/";

const userDetailContainer = document.getElementById("user-details");
const searchButton = document.getElementById("searchButton");

async function fetchUser(userName) {
  try {
    const response = await fetch(GITHUB_API_URL + userName);

    if (!response.ok) {
      if (response.status === 404) {
        userDetailContainer.innerHTML = "<p>User not found.</p>";
      } else {
        userDetailContainer.innerHTML =
          "<p>There was an error fetching the data.</p>";
      }
      throw new Error("Network response was not ok");
    }

    const user = await response.json();
    displayUser(user);
  } catch (error) {
    console.error(error);
    userDetailContainer.innerHTML = "<p>An unexpected error occurred.</p>";
  }
}

function displayUser(user) {
  console.log(user);
  const userHTML = `
    <div class="card grid-2">
    <div class="all-center"><img src=${user.avatar_url} class="round-img"
        alt="avatar">
      <h2>${user.name}</h2>
      ${user.location ? `<p>${user.location}</p>` : ""}
    </div>
    <div class="all-center">
      
      ${user.bio ? `<h3 class="text-center">Bio</h3><p>${user.bio}</p>` : ""}
      <ul>
        <li><strong>Username:</strong> ${user.login}</li>
        <li></li>
        ${
          user.blog
            ? `<li><strong>Site: </strong><a href=${user.blog} target="_blank"
        rel="noreferrer">${user.blog}</a></li>`
            : ""
        }
        <li></li>
      </ul><a href=${
        user.html_url
      } class="btn btn-success my-1" target="_blank" rel="noreferrer">To
        Github Profile</a>
    </div>
  </div>
  <div class="card text-center">
    <div class="badge badge-dark">Followers: ${user.followers}</div>
    <div class="badge badge-success">Following: ${user.following}</div>
    <div class="badge badge-info">Public Repositories: ${user.repos_url}</div>
    <div class="badge badge-light">Public Gists: ${user.public_gists}</div>
  </div>`;

  userDetailContainer.innerHTML = userHTML;
}

const searchField = document.getElementById("searchField");
searchButton.addEventListener("click", function () {
  const userName = searchField.value.trim(); // the trim method trims any extra spaces
  if (userName) {
    fetchUser(userName);
  }
});

fetchUser("obrm");
