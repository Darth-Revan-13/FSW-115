Promise.all()

fetch("https://rickandmortyapi.com/api/character/", {
    method: 'get'
})
    .then(res => res.json())
    .then(res => list.innerHTML = listOfItems(res))
    .catch(err => console.log(err))

const listOfItems = (character) => {
    console.log(character);
    const items = character.map(character => '<li>' + character.name + '</li>').join("\n");
    return '<ul>' + items + '</ul>';
}

fetch("https://swapi.dev/api/people/1/", {
    method: 'get'
})
    .then(res => res.json())
    .then(res => list.innerHTML = peopleNames(res))
    .catch(err => console.log(err))

const peopleNames = (people) => {
    console.log(people);
    const names = people.map(people => '<li>' + people.name + '</li>').join("\n");
    return '<ul>' + names + '</ul>';
}

fetch("http://swapi.dev/api/starships/", {
    method: 'get'
})
    .then(res => res.json())
    .then(res => list.innerHTML = starshipNames(res))
    .catch(err => console.log(err))

const starshipNames = (starships) => {
    console.log(starships);
    const ships = starships.map(starships => '<li>' + starships.name + '</li>').join("\n");
    return '<ul>' + ships + '</ul>';
}