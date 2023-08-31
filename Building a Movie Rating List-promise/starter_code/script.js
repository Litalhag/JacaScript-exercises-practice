const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGMxZmM3YjczMzI1YTcwNzEwM2ZmOTgwNDEwYWMyMSIsInN1YiI6IjY0ZWNkNWQzYzYxM2NlMDBjOWYzMmQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.co36zvlSJeShXc1Q8d8zHl2ZElPG0XYejXx3RjtyZbk`,
  },
});

const API_BASE_URL = "https://api.themoviedb.org/3/";

class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }

  getTitle() {
    return this.title;
  }

  getReleaseDate() {
    const date = new Date(this.releaseDate);
    return date.toLocaleDateString(); // converts date to a localized string
  }

  getRating() {
    return this.rating;
  }

  getPicture() {
    return this.picture;
  }
}

const getImage = (imgPath) => {
  return `https://image.tmdb.org/t/p/original/${imgPath}`;
};

const fetchMovies = () => {
  // 2. Use the fetch API for the GET Request:
  fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, getHttpOptions())
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      return response.json();
    })
    .then((data) => {
      // 4. Iterate Through the Results and Create Movie Instances:
      data.results.forEach((item) => {
        const imgPath = item.poster_path || item.backdrop_path;
        const img = getImage(imgPath);
        const movie = new Movie(
          item.title,
          item.release_date,
          img,
          item.vote_average
        );

        // Update the Item Count:
        updateItemCount();

        // function I will define later
        createMovieCard(movie);
      });
    })

    .catch((err) => console.error(err));
};

// Update the Item Count:
const updateItemCount = () => {
  const countItems = document.querySelector(".sort-bar p");
  const movies = document.querySelectorAll(".movie");
  const count = movies.length;
  countItems.innerHTML = "${count} items";
};

function createMovieCard(movie) {
  let target = document.querySelector(".movies-list");
  target.innerHTML += ` 
          <div class="movie">
          <img class="vector-img" src="./images/Vector.svg">
          <a href="#">
          <img class="poster-img" src="./images/tabler-icon-plus.svg"> </a>
          <img class="poster" src=${movie.getPicture()}>
          <div class="flex-container movie-info">
          <a href="#" class="title normal-link">${movie.getTitle()}</a>
          <p class="release-date"><strong>Release Date:</strong> ${movie.getReleaseDate()}</p>
          <div class="flex-container rate-trailer">
            <div class="flex-container trailer">
              <img src="./images/play.svg">
              <a href="#">Trailer</a>
            </div>
            <div class="flex-container rating">
              <img src="./images/star.svg">
              <p>${movie.getRating()}</p>
            </div>
          </div>
        </div>
      </div>
          `;
}
fetchMovies();
