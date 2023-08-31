const OMDB_URL = "https://www.omdbapi.com";
const API_KEY = "eb78665d";

const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const movieContainer = document.querySelector("#movieContainer");

searchButton.addEventListener("click", function () {
  searchMovie();

  searchInput.value = "";
});

async function searchMovie(title) {
  try {
    let response = await fetch(`${OMDB_URL}?t=${title}&apikey=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    // const template = `
    //   <div class="movie-content">
    //   <img src="${poster}" alt="Movie Poster" class="poster">
    //   <div class="movie-details">
    //     <h1>${title}</h1>
    //     <p>${plot}</p>
    //     <div class="info">
    //       <div class="info-label">Genre:</div>
    //       <div>${genre}</div>
    //     </div>
    //     <div class="info">
    //       <div class="info-label">Year:</div>
    //       <div>${year}</div>
    //     </div>
    //     <div class="info">
    //       <div class="info-label">Director:</div>
    //       <div>${director}</div>
    //     </div>
    //     <div class="info">
    //       <div class="info-label">Actors:</div>
    //       <div>${actors}</div>
    //     </div>
    //     <div class="info">
    //       <div class="info-label">Ratings:</div>
    //       <div id="movieRatings">
    //         ${ratingsHTML}
    //       </div>
    //     </div>
    //   </div>
    // </div>`;

    // movieContainer.innerHTML = template;

    handleRatings();
    return movieData;
  } catch (error) {
    console.error(error);
  }
}

function handleRatings(ratings, targetDiv) {
  if (!ratings) {
    console.log("No ratings provided");
    return;
  }

  ratings.forEach((rating) => {
    // Create a div to hold each rating
    const ratingDiv = document.createElement("div");
    // Add the source and value of the rating to the div
    ratingDiv.innerHTML = `<span style="font-weight: bold;">${rating.Source}: </span><span>${rating.Value}</span>`;
    // Append the div to the targetDiv
    targetDiv.appendChild(ratingDiv);
  });
}

searchMovie("Rise of the beasts");
