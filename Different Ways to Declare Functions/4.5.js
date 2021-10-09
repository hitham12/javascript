function leapYear(year){
    return((year % 4 == 0) && (year % 100 !=0)) || (year % 4 == 0);

}
    
console.log(leapYear(2012));
console.log(leapYear(2001));
console.log(leapYear(2008));

