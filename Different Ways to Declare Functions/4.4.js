function includeseven (num){

    while(num>0){
        if(num % 10 == 7)
        return true;

    num /= 10;
    }
    return false;
}

function boom(num) {
    for (let i=1; i<num; i++){
        if (includeseven (i) &&i%7==0)
        console.log('Boom-Boom');
        else if(i%7==0) console.log('Boom');
        else console.log(i);
    }
}
boom(50);