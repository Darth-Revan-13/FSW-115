const main = document.querySelector("#app");
let url = "https://api.vschool.io/pokemon";

axios.get(url)
    .then( response => render(response))
    .catch( error => console.log(error))

const render = (response) => {
    console.log(response.data.title);
}

const listOfPokemon = (pokemon) => {
    console.log(pokemon);
    const names = pokemon.map(pokemon => '<li>${pokemon.name}</li>').join("\n");
    return '<ul>${names}</ul>';
}