import MovieData from "./MovieData.mjs";

// const key = import.meta.env.key
const url = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&series_granularity=show&genres=action&order_direction=asc&order_by=rating&output_language=en&show_type=movie';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': `${process.env.API_KEY}`,
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
	}
};

const dataSource = new MovieData()

console.log(dataSource.getData(url, options))