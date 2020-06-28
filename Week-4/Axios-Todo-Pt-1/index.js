const createNode = (elem) => {
    return document.createElement(elem);
};

const appendNode = (parent, elem) => {
    parent.appendChild(elem);
};

fetch(get, "https://api.vschool.io/alexhilbert/todo/")
    .then(res => res.json())
    .then(data => {
        data.map((todo) => {
            let li = createNode("li");
                span = createNode("span");
            span.innerText = todo.description;
            appendNode(ul, li);
            appendNode(li, span);
        });
    }).catch(err => {
        console.error("Error: ", err);
    });
// fetch('https://api.vschool.io/alexhilbert/todo/')
    