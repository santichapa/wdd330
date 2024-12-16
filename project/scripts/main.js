import GenreList from "./GenreList.mjs";
import MovieData from "./MovieData.mjs";
import MovieList from "./MovieList.mjs";
import { alertMessage, setLocalStorage } from "./utilities.mjs";

const keyInput = document.querySelector("#key-input")


const dataSource = new MovieData()
const parentSelector = document.querySelector(".cards")

const genresElement = document.querySelector(".movie-genres")
const genres = new GenreList(dataSource, genresElement)
genres.init()

const newMovieList = new MovieList("action", dataSource, parentSelector)
newMovieList.init()




const apiKeyBtn = document.querySelector("#apiKeyBtn")
apiKeyBtn.addEventListener("click", saveKey)

function saveKey() {
	const keyInput = document.querySelector("#key-input")
	if (keyInput.value !== null) {
		setLocalStorage("api-key", keyInput.value)
	}
}