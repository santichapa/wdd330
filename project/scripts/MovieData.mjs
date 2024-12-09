import { convertToJson } from "./utilities.mjs";

const url = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&series_granularity=show&genres=action&order_direction=asc&order_by=rating&output_language=en&show_type=movie';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ec1a90c421mshbeac6715d12b258p16f183jsnbb7ecf315ebf',
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


export default class MovieData {
    constructor(category) {
		
    }

    async getData(url, options) {
		const response = await fetch(url, options);
		const data = await convertToJson(response);
		console.log(result);
        return data.Result;
      }
}