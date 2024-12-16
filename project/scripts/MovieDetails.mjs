import { alertMessage } from "./utilities.mjs"

function detailsTemplate(movie) {
    return `
        <button id="closeModal" class="close-btn">✕</button>
        <img src="https://placehold.co/200x300" alt="A poster of '${movie.title}'">
        <h2>${movie.title}</h2>
        <table>
            <tr>
                <th>Release Date: </th>
                <td>${movie.release_date}</td>
            </tr>
            <tr>
                <th>Runtime: </th>
                <td>${movie.runtime} Minutes</td>
            </tr>
            <tr>
                <th>Genres: </th>
                <td>${movie.genres}</td>
            </tr>
            <tr>
                <th>Language: </th>
                <td>${movie.original_language}</td>
            </tr>
            <tr>
                <th>Average Rating: </th>
                <td>${movie.vote_average}</td>
            </tr>
            <tr>
                <th>Produced By: </th>
                <td>${movie.production_companies}</td>
            </tr>
        </table>
        <div class="overview">
            <h3>Overview</h3>
            <p>${movie.overview} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Error officia perferendis corrupti distinctio deserunt 
                quidem quam animi accusamus qui sint blanditiis asperiores, 
                corporis molestiae delectus, illum ipsum harum unde numquam 
                ut nihil dolorem nobis optio ipsam dolorum. Ea facilis 
                minima, sit earum quidem dolorum in?</p>
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