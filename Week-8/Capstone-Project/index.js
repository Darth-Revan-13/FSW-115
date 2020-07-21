//get
fetch("https://api.vschool.io/alexhilbert/todo/", {
    method: 'get'
})
    .then(res => res.json())
    .then(res => list.innerHTML = listOfItems(res))
    .catch(err => console.log(err))

const listOfItems = (todo) => {
    console.log(todo);
    const items = todo.map(todo => '<li>' + todo.description + "<input type=checkbox id=update>" + "<button id=remove>Send to Black Hole</button>" + '</li>').join("\n");
    return '<ul>' + items + '</ul>';
}

fetch("https://rickandmortyapi.com/api/character", {
    method: 'get'
})
    .then(res => res.json())
    .then(res => list.innerHTML = listOfItems(res))
    .catch(err => console.log(err))

const listOfItems = (character) => {
    console.log(character);
    const items = character.map(character => '<li>' + character.name + "<input type=checkbox id=update>" + "<button id=remove>Send to Black Hole</button>" + '</li>').join("\n");
    return '<ul>' + items + '</ul>';
}
//post
const todoForm = document.todoForm;
todoForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value
    }

    axios.post("https://api.vschool.io/alexhilbert/todo/", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
});
//put
const updates = {
    title: todo.title,
    description: todo.description
}

if (document.getElementById("update").checked = true) {
    for (i = 0; i < todo.length; i++) {
        const url = "https://api.vschool.io/alexhilbert/todo/" + todo._id;
        axios.put(url, updates)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
}
//delete
document.getElementById("remove").addEventListener("click", function (e) {
    e.preventDefault()
    const url = "https://api.vschool.io/alexhilbert/todo/";
    axios.delete(url)
        .then(response => console.log(response))
        .catch(error => console.log(error))
})