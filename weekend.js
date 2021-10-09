//Ex1.1
let obj = {};

function yesNo(num) {
    if (num == true) {
        return "Yes"
    } else {
        return "No"
    }
}
obj.yesNo = yesNo
    // console.log(obj.yesNo());

//ex2.1
let array = [10, 3, 9, 8]
let sorted1 = array.sort((a, b) => {
    return a - b

})

function sumoflowest(arr) {
    return sorted1[0] + sorted1[1]
}
// console.log(sumoflowest(sorted1));

//ex2.2
let arr21 = [0, 1, 1, 0]
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
// console.log(binaryArrayToNumber(arr21));
//ex2.3

function findNextSquare(sq) {
    let root1;
    let nextroot;
    if (Math.sqrt(sq) % 1 === 0) {
        root1 = Math.sqrt(sq)
        nextroot = root1 + 1
    } else {
        return -1;
    }
    return nextroot * nextroot;
}


// console.log(findNextSquare(625));

//ex2.4
let Unique = [1, 1, 1, 2, 1, 1]

function odd(arr3) {
    for (let i = 0; i < arr3.length - 3; i++) {
        if (arr3[i] == arr3[i + 1] && arr3[i] != arr3[i + 2]) {
            return arr3[i + 2]
        } else if (arr3[i] != arr3[i + 1] && arr3[i] == arr3[i + 2]) {
            return arr3[i + 1]
        } else if (arr3[i] != arr3[i + 1] && arr3[i] != arr3[i + 2]) {
            return arr3[i]
        }

    }
}
// console.log(odd(Unique));



//ex2.5

function sum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}
// console.log(sum(8));

//ex2.6

function centuryFromYear(year) {
    let x = Math.floor(year / 100) + 1;
    return x;
}
// console.log(centuryFromYear(1601));

//ex2.7

function basicMath(str, num1, num2) {
    return eval(num1 + str + num2)
}
//console.log(basicMath('*', 8, 3));

//ex3.1
function Gop(p0, percent, mon, p) {
    let sum = p0;
    let noy = 0;
    while (sum <= p) {
        sum = sum + (sum * percent / 100) + mon;

        noy++;
    }


    return noy
}


//console.log(Gop(1500, 5, 100, 5000));

//ex3.2

let bus = [
    [2, 0],
    [5, 2],
    [7, 3],
    [5, 7],
    [5, 5]

]

function bus2(bus) {
    let num = 0;
    bus.forEach(v => { num += v[0] - v[1] });
    return num

}
// console.log(bus2(bus));

//ex4.1

let fibonacci1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ]

function fibonacci(num6, num10) {
    let num7 = num10;
    let num8 = 1;
    let sum;
    let i = 0;
    for (let i = 0; i < num6 - 2; i++) {
        sum = num7 + num8;
        num7 = num8;
        num8 = sum;

    }
    return num8;
}

// console.log(fibonacci(10, 1));

//ex4.2
function Tribonacci(num6, num10) {
    let n1 = num10
    let num7 = num10;
    let num8 = 1;
    let sum;
    let i = 0;
    for (let i = 3; i < num6; i++) {
        sum = num7 + num8 + n1;
        num7 = num8;
        num8 = n1
        n1 = sum;


    }
    return n1;
}
// console.log(Tribonacci(8, 1));

//Ex5.1

function trimstr(Str1) {
    let trimed = "";
    for (let i = 1; i < Str1.length - 1; i++) trimed += Str1[i]
    return trimed;
}

//ex5.2

function stringrepeat(n, str) {
    let result = "";
    for (let i = 0; i < n; i++) result += str;
    return result
}
//ex5.3

function toCamelCase(str) {
    let arr1 = [];
    let arr = str.split("");
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "-" || arr[i] == "_") {
            arr1.push('');
            arr1.push(arr[i + 1].toUpperCase());
            i++
        } else { arr1.push(arr[i]) }
    }
    return arr1.join("");
}
// console.log(toCamelCase("the-stealth-warrior"));

//ex 5.4
function toWeirdCase(string) {
    return string.split(' ').map(function(word) {
        return word.split('').map(function(letter, index) {
            if (index % 2 === 0) {
                return letter.toUpperCase();
            } else if (index % 2 != 0) {
                return letter.toLowerCase();
            }
        }).join('');
    }).join(' ');
}

//ex5.5

function initialName(words) {
    'use strict'

    return words
        .replace(/\b(\w)\w+/g, '$1.')
        .replace(/\s/g, '')
        .replace(/\.$/, '')
        .toUpperCase();
}

// console.log(initialName('Sam Harris'));
// console.log(initialName('Patrick Feeney'));

//ex5.6

function maskify(str) {
    if (str.length == 0 || str.length == 1 || str.length == 3 || str.length == 4)
        return str
    return '#'.repeat(str.length - 4) + str.split('').splice(str.length - 4, str.length).join('')
}
// console.log(maskify("152525253434534534"));

//ex5.7

function findShortestWord(str) {
    let words = str.split(' ');
    let shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    });
    return shortest;
}
// console.log(findShortestWord("finding the shortest word here!!"));

//ex5.8

function findLongestWord(str) {
    let longest = str.split(' ').reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");
    return longest;
}
// console.log(findLongestWord("finding the longest word here!!"));

//ex6.1

function accum(s) {
    let letters = s.split(''),
        words = [];

    for (let i = 0; i < letters.length; i++) {
        words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }

    return words.join('-');
}
// console.log(accum("RqaEzty"));

//ex6.2

const arr = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"]
const counts = {};
arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});
// console.log(counts)

//ex6.3

let array300 = "deeg";
let array400 = "abbc"

function organizeStrings(a, b) {
    let newstr = a + b;

    const set = new Set();

    for (let i = 0; i < newstr.length; i++) {
        set.add(newstr[i])
    }

    // convert set to array

    // sort the converted array

    // convert the sorted array to string(use join)

    //return the result
}

organizeStrings(array300, array400)

//ex6.4

function isIsogram(string) {
    let str = string.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    if (str == null) {
        return true
    } else {
        return false;
    }
}
// console.log(isIsogram("aba"));

//ex7




//ex8

function rectanglePerimeter(length, width) {
    return 2 * (length + width)

}
console.log(rectanglePerimeter(2, 9));