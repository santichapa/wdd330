import FilterList from "./FilterList.mjs";
import MovieData from "./MovieData.mjs";
import MovieList from "./MovieList.mjs";
import { alertMessage, setLocalStorage } from "./utilities.mjs";

const keyInput = document.querySelector("#key-input")


const dataSource = new MovieData()
const parentSelector = document.querySelector(".cards")


const filtersElement = document.querySelector(".movie-filters")
const filters = new FilterList(dataSource, filtersElement)
filters.init()


const filtersHamBtn = document.getElementById('filters-hamBtn')
filtersHamBtn.addEventListener('click', function() { 
	const movieFilters = document.querySelector('.movie-filters')
	movieFilters.classList.toggle('open') 
	filtersHamBtn.classList.toggle('open')
})

const filterButton = document.querySelector("#filter-button")
filterButton.addEventListener("click", () => {
	const newMovieList = new MovieList(filters.selectedGenres.join(","), filters.selectedStreamings.join(","), dataSource, parentSelector)
	newMovieList.init()
})


const apiKeyBtn = document.querySelector("#apiKeyBtn")
apiKeyBtn.addEventListener("click", saveKey)

function saveKey() {
	const keyInput = document.querySelector("#key-input")
	if (keyInput.value !== null) {
		setLocalStorage("api-key", keyInput.value)
	}
}

alertMessage("Select your desired genres and streaming platforms, then click on 'Filter Movies'. Also, You can click on a movie poster to see more details. ")