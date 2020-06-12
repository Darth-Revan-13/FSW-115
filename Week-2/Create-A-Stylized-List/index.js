let menu = JSON.parse('{
    "appetizers": [
        {
            "name": "Bacon-Wrapped Stuffed Jalapenos",
            "ingredients": ["jalapeno peppers", "chorizo or spicy pork sausage", "shredded cheddar cheese", "bacon strips"],
            "description": "Hot grilled food"
        },
        {
            "name": "Glazed Chicken Wings",
            "ingredients": ["chicken wings", "barbecue sauce", "honey", "soy sauce"],
            "description": "Sweet wings"
        }
    ],
    "cold sandwiches": [
        {
            "name": "Cobb Salad Sub",
            "ingredients": ["Italian bread", "dressing of your choice", "fresh baby spinach", "sliced deli ham", "hard-boiled large eggs", "bacon strips", "rumbled Gorgonzola cheese", "cherry tomatoes"],
            "description": "Good for catering"
        },
        {
            "name": "Apple-Swiss Turkey Sandwiches",
            "ingredients": ["medium apples", "multigrain bread", "honey mustard", "turkey breast", "sliced cucumber", "Swiss cheese"],
            "description": "Pack well for trips"
        }
    ],
    "hot sandwiches": [
        {
            "name": "Grilled Chicken and Apple Sandwiches",
            "ingredients": ["canned chicken", "mayonnaise", "lemon juice", "Swiss cheese", "celery", "apple", "whole wheat bread​", "softened butter"],
            "description": "Great with soup"
        },
        {
            "name": "The Cubano",
            "ingredients": ["Cuban bread", "ham", "pork", "Swiss cheese", "dill pickles", "butter"],
            "description": "A Traditional Cuban Sandwich.....from Florida"
        }
    ],
    "desserts": [
        {
            "name": "Palmiers",
            "ingredients": ["sugar", "frozen puff pastry"],
            "description": "French pastries, which are often called palm leaves"
        },
        {
            "name": "Angel Macaroons",
            "ingredients": ["angel food cake mix", "water", "almond extract", "sweetened shredded coconut"],
            "description": "Simple cookies"
        }
    ],
    "drinks": [
        {
            "name": "Cherry-Infused Dr. Pepper™ Punch",
            "ingredients": ["Dr. Pepper™ soda", "pure cherry juice", "Ginger Ale", "maraschino cherries", "pomegranate arils"],
            "description": "This cherry-infused punch pops with Dr. Pepper™ flavor!"
        },
        {
            "name": "Sparkling Summer Limeade",
            "ingredients": ["blackberries or blueberries", "kiwi fruit", "fresh diced pineapple", "fresh diced mango", "strawberries", "limeade concentrate", "lemon-lime soda or ginger ale"],
            "description": "Served with layers of colorful fruit"
        }
    ]
}');

const values = Object.values(menu);
const entries = Object.entries(menu);

console.log(values);
console.log(entries);

const app1 = document.querySelector('#app1');
const app2 = document.querySelector('#app2');
const app3 = document.querySelector('#app3');

app1.innerHTML = '<ul>' + values.map(function (value) {
    return '<li><span>values:</span> ${value} </li>';
}).join('') + '</ul>'

app2.innderHTML = '<ul>' + entries.map(function (item) {
    return '<li><span>keys:</span> ${item[0]} <span>values:</span> ${item[1]} </li>';
}).join('') + '</ul>'

app3.innerHTML = '<ul>' + menu.map(function (el) {
    return '<li><span>keys:</span> ${Object.keys(el)} <span>values:</span> ${Object.values(el)} </li>';
}).join('') + '<ul>'