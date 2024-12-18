import MovieDetails from "./MovieDetails.mjs"
import { renderListWithTemplate, setClick } from "./utilities.mjs"


export default class MovieList {
    constructor(genres, streamingServices, dataSource, parentSelector ) {
        this.genres = genres
        this.streamingServices = streamingServices
        this.dataSource = dataSource
        this.parentSelector = parentSelector
    }

    async init() {
            const movieList = await this.dataSource.getMovies(this.genres, this.streamingServices)
            this.renderList(movieList)
    }

    movieListTemplate(movie) {
        return `
            <section class="card" id="${movie.imdbId}">
                <picture>
                    <img src="${movie.imageSet.verticalPoster.w240}" alt="A Poster of ${movie.title}">
                    <p>${movie.title} <span>(${movie.releaseYear})</span></p>
                </picture>
            </section>`
    }

    renderList(movieList) {
        renderListWithTemplate(this.movieListTemplate, this.parentSelector, movieList.shows, "afterbegin", true)
        const movieCards = document.querySelectorAll(".card")
        
        movieCards.forEach((card, index) => {
            card.addEventListener("click", () => {
                const movieId = card.id //this.getMovieId()
                const details = new MovieDetails(movieId, this.dataSource)
                details.init()
            })
        });
    }
}