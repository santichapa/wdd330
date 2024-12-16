import MovieDetails from "./MovieDetails.mjs"
import { renderListWithTemplate, setClick } from "./utilities.mjs"


export default class MovieList {
    constructor(genres, dataSource, parentSelector ) {
        this.genres = genres
        this.dataSource = dataSource
        this.parentSelector = parentSelector
    }

    async init() {
            const movieList = await this.dataSource.getMovies("action")
            this.renderList(movieList)
    }

    movieListTemplate(movie) {
        return `
            <section class="card">
                <picture>
                    <img src="${movie.imageSet.verticalPoster.w240}" alt="A Poster of ${movie.title}">
                    <p>${movie.title} <span>(${movie.releaseYear})</span></p>
                </picture>
            </section>`
    }

    renderList(movieList) {
        renderListWithTemplate(this.movieListTemplate, this.parentSelector, movieList.shows, "afterbegin", true)
        const movieCards = document.querySelectorAll(".cards")
        movieCards.forEach((card, index) => {
            card.addEventListener("click", () => {
                const movieId = "tt1375666" //this.getMovieId()
                const details = new MovieDetails(movieId, this.dataSource)
                details.init()
            })
            // setClick(".card", () => {
            //     const movieId = "tt1375666" //this.getMovieId()
            //     const details = new MovieDetails(movieId, this.dataSource)
            //     details.init()
            //     alertMessage("movie clicked")
            // })
        });
    }
    getMovieId(movie) {
        return
    }
}