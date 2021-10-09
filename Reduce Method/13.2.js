let arr = ["madrista", "barca", "united", "graneda"]

function stringLength(arr) {
    let newarr = [];
    let i = 0;
    while (i < arr.length) {
        newarr[i] = arr[i].length;
        i++;

    }
    return newarr
}

stringLength(arr)
console.log(stringLength(arr));