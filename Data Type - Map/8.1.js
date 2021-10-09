let obj1 = {
    name: 'seat'
}
let obj2 = {
    name: 'tesla'
}
let obj3 = {
    name: 'opel'
}


let map1=new Map()

    map1.set('seat', 1)
    map1.set('tesla', 2)
    map1.set('opel', 3)

    let seatCount = map1.get('seat');

    console.log(seatCount);

    for (let [key, value] of map1) {
        console.log(key + ':' + value)
    }


    