let numbers = [2, 4, -1, 5, 7];
const doubleValues = numbers.map(function(num) {
        return num * 2
    })
    // console.log(doubleValues);

let numbers1 = [2, 5, 6, 1, 8, 9, 3];
const result = [];
numbers1.forEach(element => {
    if (element % 2 === 0)
        result.push(element)
});
// console.log(result);

// [2, 5, 6, 1, 8, 9, 3]
const showFirstAndLast = numbers1.map((val) => {
    return val + ""

}).filter((elem, index) => {

    return (index === 0 || index === numbers1.length - 1)

})


const vowelsLetters = ["a", "i", "e", "o", "u"]

function vowelCount(str) {
    let spliters = str.split(" ").join("").toLowerCase().split("")
    let vowels = {}
    spliters.forEach(element => {
        if (vowels[element])
            vowels[element] += 1
        else
            vowels[element] = 1

    });
    for (let k in vowels) {
        if (!vowelsLetters.includes(k))
            delete vowels[k]
    }
    return vowels


}
console.log(vowelCount("sadsa Xkdsamo SDM kjC"))

function capitalize(str) {
    return str.toUpperCase()
}


function shiftLetters(str) {
    let Letters = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'A')
            Letters.push(String.fromCharCode((str[i]).fromCharCode(0) + 25))
        else if (str[i] == " ")
            Letters.push(String.fromCharCode((str[i]).fromCharCode(0)))
        else
            Letters.push(String.fromCharCode((str[i]).fromCharCode(0) - 1))
    }
    return Letters
}
console.log(shiftLetters("hi hj"));