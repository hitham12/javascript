//  1:
// Answer --- 'this' point to window in this case, and it returns like global
console.log(this);

//  2:

// add 'function' word before the '()'. in this case 'this' will be return to 'myObj' 
const myObj = {
    name: "Timmy",
    greet: function(){
        console.log(`Hello ${this.name}`);
    },
}; 
myObj.greet();

// Question 3:
//'this' returns nothing/empty, because we לא קראנו ל- the 'myFuncDec', if we did, this will return window
const myFuncDec = function () {
    console.log(this);
};

//  4:

const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();

//  5:
//point to the object of element class 
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});