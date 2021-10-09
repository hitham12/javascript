function percentOfWorld2(country, population, capitalCity,)
{

return `${country} has ${population} million people and its capital city is ${capitalCity} and its population ${((population)/(7900*100)).toFixed(2)} of the world`;

}

console.log(percentOfWorld2('spain', '8000000', 'madrid'));
console.log(percentOfWorld2('France', '3000000', 'Paris'));
console.log(percentOfWorld2('Italy', '15000000', 'Roma'));


const percentOfWorld1=function(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity} and its population ${((population)/(7900*100)).toFixed(2)} of the world`;


}

console.log(percentOfWorld1('spain', '8000000', 'madrid'));
console.log(percentOfWorld1('France', '3000000', 'Paris'));
console.log(percentOfWorld1('Italy', '15000000', 'Roma'));