const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    let candiesArray = candyStore.candies
    for (let i = 0; i < candiesArray.length; i++) {
        if (candiesArray[i].id == id) {
            return candiesArray[i]
        }
    }



}
// let x = getCandy(candyStore, "as12f")
// console.log(x);

function getPrice(candyStore, id) {
    let candiesArray = candyStore.candies
    for (let i = 0; i < candiesArray.length; i++) {
        if (candiesArray[i].id == id) {
            return candiesArray[i].price
        }
    }
}
// let x = getPrice(candyStore, "as12f")
// console.log(x);

function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({ id: id, name: name, price: price, amount: 1 })
}

function buy(candyStore, id) {
    let candiesArray = candyStore.candies
    for (let i = 0; i < candiesArray.length; i++) {
        if (candiesArray[i].id == id) {
            candiesArray[i].amount = candiesArray[i].amount - 1
            candiesArray[i].cashRegister = candiesArray[i].cashRegister + candiesArray[i].price
        }
    }
}