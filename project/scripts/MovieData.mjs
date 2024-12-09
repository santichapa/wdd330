import { convertToJson } from "./utilities.mjs";

export default class MovieData {
    constructor() {
		
    }

    async getData(url, options) {
		const response = await fetch(url, options);
		const data = await convertToJson(response);
		
        return data;
      }
}