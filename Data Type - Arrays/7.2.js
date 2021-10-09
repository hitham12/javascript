const mycountry = {
    country: "israel",
    capital: "Jerusalem",
    language:"Hebrew",
    population: "9 million" ,
    neighbours: "Jordan, Lebanon, Syria, Egypt"
}
function mycountrydec(mycountry){
return `${mycountry.country} has ${mycountry.population} people, their mother tongue is ${mycountry.language}, they
have 4 neighbouring countries and a capital called ${mycountry.capital}.`
}
console.log(mycountrydec(mycountry));

