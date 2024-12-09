import { renderListWithTemplate } from "./utilities.mjs"

export default class MovieList {
    constructor(genres, dataSource, parentSelector ) {
        this.genres = genres
        this.dataSource = dataSource
        this.parentSelector = parentSelector
    }

    async init() {
            const movieList = this.dataSource.getData()
            this.renderList(movieList)
    }

    movieListTemplate() {
        return `
            <section class="card">
                <picture>
                    <img src="https://placehold.co/200x300" alt="movie name poster">
                    <p>The Adventures of the rain dance Maggie <span>(year)</span></p>
                </picture>
            </section>`
    }

    renderList(movieList) {
        renderListWithTemplate(this.movieListTemplate, this.parentSelector, movieList)
    }
}