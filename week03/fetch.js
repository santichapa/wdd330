const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  renderPokeList(results)
}
getPokemon(url);
console.log("second: ", results);

const selectElement = document.querySelector("#poke")
const pokeImg = document.querySelector("#poke-img")

function renderPokeList(data) {
    data.results.forEach(poke => {
        const opt = document.createElement("option")
        opt.setAttribute("value", poke.name)
        opt.innerText = poke.name
        selectElement.appendChild(opt)
    });
}

// selectElement.addEventListener("change", () => {
//     pokeImg.setAttribute("src", )
// })

renderPokeList()