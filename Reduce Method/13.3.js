const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
    "Cucumber", "Olives"
];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
    "Hamburgers"
];

let firstArr = ["Noodle", "Pasta", "Ice-cream", "Meat",
    "Cucumber", "Olives"
];
let secondArr = ["Fries", "Ice-cream", "Pizza", "Olives",
    "Hamburgers"
];
let isEqual = JSON.stringify(firstArr) === JSON.stringify(secondArr);
console.log(isEqual);