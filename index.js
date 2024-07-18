function getMovie(response) {
  let movieRefElement = document.querySelector("#movie-ref");
  let movieRating = document.querySelector("#movie-rate");
  let rateElement = document.querySelector("#watch-rate");
  let movieRelease = document.querySelector("#movie-release");
  let movieTime = document.querySelector("#run-time");
  let movieGenre = document.querySelector("#genre");
  let moviePlot = document.querySelector("#movie-plot");
  let movieCast = document.querySelector("#movie-cast");
  let moviePoster = document.querySelector("#poster");
  moviePoster.innerHTML = `<img src="${response.data.Poster}" alt="" class="poster"/>`;

  movieRefElement.innerHTML = response.data.Title;
  movieRating.innerHTML = response.data.imdbRating;
  rateElement.innerHTML = response.data.Rated;
  movieRelease.innerHTML = response.data.Year;
  movieTime.innerHTML = response.data.Runtime;
  movieGenre.innerHTML = `<div>${response.data.Genre.split(",").join(
    "</div><div>"
  )}</div>`;
  moviePlot.innerHTML = response.data.Plot;
  movieCast.innerHTML = response.data.Actors;
}

function searchMovie(movie) {
  let apiKey = `9a71fe94`;
  let apiUrl = `http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

  axios.get(apiUrl).then(getMovie);
}

function search(event) {
  event.preventDefault();
  let movieName = document.querySelector("#movie-name");

  searchMovie(movieName.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

searchMovie("Bad boys ride or die");
