export default class FilterList {
    constructor(dataSource, parentElement) {
        this.dataSource = dataSource
        this.parentElement = parentElement
        this.selectedGenres = []
        this.selectedStreamings = []
    }
    async init() {
        const genreList = await this.dataSource.getGenres()
        const servicesList = await this.dataSource.getStreamingServices()
        this.displayGenres(genreList)
        this.displayStreaming(servicesList)
    }
    displayGenres(genreList) {
        const genresTitle = document.createElement("h2")
        genresTitle.innerText = "Movie Genres"
        this.parentElement.appendChild(genresTitle)
        genreList.forEach(g => {
            const div = document.createElement("div")
            div.innerText = g.name
            div.id = g.id

            div.addEventListener("click", () => {
                this.toggleGenres(div)
            }
            )
            this.parentElement.appendChild(div)
        });
    }

    displayStreaming(streamingList) {
        const servicesTitle = document.createElement("h2")
        servicesTitle.innerText = "Movie Streaming Services"
        this.parentElement.appendChild(servicesTitle)
        streamingList.forEach(s => {
            const div = document.createElement("div")
            const img = document.createElement("img")
            img.setAttribute("src", s.imageSet.whiteImage)
            img.setAttribute("alt", s.name)
            div.appendChild(img)
            div.id = s.id

            div.addEventListener("click", () => {
                this.toggleStreaming(div)
            }
            )
            this.parentElement.appendChild(div)
        });
    }

    toggleGenres(element) {
        const genreName = element.id;
        const alreadySelected = this.selectedGenres.includes(genreName)
        if (alreadySelected) {
            const index = this.selectedGenres.indexOf(genreName);
            if (index > -1) {
                this.selectedGenres.splice(index, 1);
                element.classList.toggle("selected-filter")
            }
        } else {
            this.selectedGenres.push(genreName)
            
            element.classList.add("selected-filter")
        }
        console.log(this.selectedGenres)
    }

    toggleStreaming(element) {
        const serviceName = element.id;
        const alreadySelected = this.selectedStreamings.includes(serviceName)
        if (alreadySelected) {
            const index = this.selectedStreamings.indexOf(serviceName);
            if (index > -1) {
                this.selectedStreamings.splice(index, 1);
                element.classList.toggle("selected-filter")
            }
        } else {
            this.selectedStreamings.push(serviceName)
            
            element.classList.add("selected-filter")
        }
        console.log(this.selectedStreamings)
    }
}