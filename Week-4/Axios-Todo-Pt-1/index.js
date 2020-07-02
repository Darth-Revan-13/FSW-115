fetch("https://api.vschool.io/alexhilbert/todo/", {
    method: 'get'
})
    .then(res => res.json())
    .then(res => list.innerHTML = listOfItems(res))
    .catch(err => console.log(err))

const listOfItems = (todo) => {
    console.log(todo);
    const items = todo.map(todo => '<li>' + todo.description + '</li>').join("\n");
    return '<ul>' + items + '</ul>';
}