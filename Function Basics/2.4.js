// function area(radius){
//     return (Math.pow(radius,2) *Math.PI).toFixed(2);
// }
//
// console.log(area(10))
​
let date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
​
function getDayName() {
    return days[date.getDay()]
}
​
function getDayOfMonth() {
    return date.getDate()
}
​
function getMonthName() {
    return monthNames[date.getMonth()];
}
​
getMonthName()
​
function getYear() {
    return date.getFullYear();
}
​
//`Today is Sunday the 31 of January, 2021’
function getDateFormat() {
    return `Today is ${getDayName()} the ${getDayOfMonth()} of ${getMonthName()}, ${getYear()}`
}
​
console.log(getDateFormat())
Collapse





















