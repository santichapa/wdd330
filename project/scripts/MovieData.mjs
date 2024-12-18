import { convertToJson, getLocalStorage } from "./utilities.mjs";

// const keyInput = document.querySelector("#key-input")
const key = getLocalStorage("api-key")

const movieUrl = `https://streaming-availability.p.rapidapi.com`;
const moviefilters = "/filters?country=us&series_granularity=show&year_min=2000&genres_relation=or&order_direction=desc&order_by=rating&output_language=en&show_type=movie"
const movieOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': `${key}`,
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
	}
};

const detailsUrl = 'https://movie-database-by-based-api.p.rapidapi.com/v1/movies/?i=';
const detailsOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': `${key}`,
		'x-rapidapi-host': 'movie-database-by-based-api.p.rapidapi.com'
	}
};

export default class MovieData {
  constructor() {
		
  }

  async getMovies(genres, services) {
		const response = await fetch(`${movieUrl}/shows/search${moviefilters}&genres=${genres}&catalogs=${services}`, movieOptions);
		const data = await convertToJson(response);
		
    return data;
  }
  async getMovieById(id) {
    const response = await fetch(`${detailsUrl}${id}`, detailsOptions);
		const data = await convertToJson(response);
		
    return data;
  }
  async getGenres() {
    const response = await fetch(`${movieUrl}/genres`, movieOptions);
		const data = await convertToJson(response);
		
    return data;
  }
  async getStreamingServices() {
    const response = await fetch(`${movieUrl}/countries/ar?output_language=en`, movieOptions);
		const data = await convertToJson(response);
		
    return data.services;
  }
}