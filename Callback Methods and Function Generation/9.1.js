const isString=(str,print) => {
  if(typeof str === 'string')
    print(str);
}

const FirstUpperCase=(str,dash) => {
    let firstword=str.split(' ')[0].toUpperCase()
    str=firstword+str.slice(firstword.length,str.length)
    dash(str);
}

const print = (str) =>console.log(str) ;
const dash=(str)=>
    console.log(str);

    console.log(

            isString('hitham', print),
            FirstUpperCase('hitham nas',dash)
    );
