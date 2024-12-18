import { alertMessage } from "./utilities.mjs"

function detailsTemplate(movie) {
    return `
    <div id="movie-details">
        <button id="closeModal" class="close-btn">✕</button>
        <img src="${movie.Poster}" alt="A poster of '${movie.Title}'">
        <h2>${movie.Title}</h2>
        <table>
            <tr>
                <th>Rated: </th>
                <td>${movie.Rated}</td>
            </tr>
            <tr>
                <th>Release Date: </th>
                <td>${movie.Released}</td>
            </tr>
            <tr>
                <th>Runtime: </th>
                <td>${movie.Runtime}</td>
            </tr>
            <tr>
                <th>Genres: </th>
                <td>${movie.Genre}</td>
            </tr>
            <tr>
                <th>Actors: </th>
                <td>${movie.Actors}</td>
            </tr>
            <tr>
                <th>Director: </th>
                <td>${movie.Director}</td>
            </tr>
            <tr>
                <th>Writer: </th>
                <td>${movie.Writer}</td>
            </tr>
            <tr>
                <th>Language: </th>
                <td>${movie.Language}</td>
            </tr>
            <tr>
                <th>Metascore/IMDb Rating: </th>
                <td>${movie.Metascore}/${movie.imdbRating}</td>
            </tr>
            <tr>
                <th>Awards: </th>
                <td>${movie.Awards}</td>
            </tr>
        </table>
        <div class="overview">
            <h3>Overview</h3>
            <p>${movie.Plot}</p>
        </div>
    </div>`
        
}

export default class MovieDetails {
    constructor(movieId, dataSource) {
        this.movieId = movieId
        this.dataSource = dataSource
        this.movie = {}
    }

    async init() {
        // use the dataSource to get the details of the movie
        this.movie = await this.dataSource.getMovieById(this.movieId)
        // display the current movie details inside the selected element
        this.displayMovieDetails("dialog")
    }

    displayMovieDetails(selector) {
        const movieDetails = document.querySelector(selector)
        movieDetails.innerHTML = detailsTemplate(this.movie)
    
        movieDetails.showModal();
        closeModal.addEventListener("click", () => {
            movieDetails.close();
        })
    }
}