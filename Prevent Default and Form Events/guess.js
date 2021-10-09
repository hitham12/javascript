const letter = document.querySelector(".letter"),
    messeage = document.querySelector(".massege"),
    tryLetter = document.querySelector("#tryletter"),
    win = document.querySelector(".playagain"),
    show = document.querySelector(".showletters");

const possibleAnswers = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
let randomIndex = Math.floor(Math.random() * possibleAnswers.length);
let randomLetter = possibleAnswers[randomIndex];
let reload = document.querySelector(".anotherround");
reload.style.display = "none";
console.log(randomLetter);
let triedletters = "";
tryLetter.addEventListener("keyup", () => {
    let str = tryLetter.value;
    console.log(str);
    if (/^[a-z]+$/.test(str)) {
        if (triedletters.includes(str)) {
            messeage.innerHTML = `${str} has already been guessed!`;
        } else {
            triedletters += str + ",";
            messeage.innerHTML = `Nope, wrong letter!`;
            show.innerHTML = `${triedletters}`;
        }
        tryLetter.value = "";

        if (str === randomLetter) {
            messeage.innerHTML = `Right letter!`;
            letter.innerHTML = randomLetter;
            win.innerHTML = "Would you like to play again?";
            show.innerHTML = "";
            tryLetter.style.display = "none";
            reload.style.display = "block";

            reload.addEventListener("click", () => {
                tryLetter.style.display = "block";
                messeage.innerHTML = ``;
                letter.innerHTML = "?";
                win.innerHTML = "Key Guessed?";
                reload.style.display = "none";
                triedletters = "";
                randomIndex = Math.floor(Math.random() * possibleAnswers.length);
                randomLetter = possibleAnswers[randomIndex];
                console.log(randomLetter);

            });
        }
    } else {
        messeage.innerHTML = `please inter a valid letter`;
        tryLetter.value = "";
    }
}); 