const numbers = [250, 10, 20, 750];

function mymaxfunc(nums) {
    return nums.reduce((pre, current) => {
        if (pre > current) return pre;

        return current
    })
}


const array1 = [1, 2, 3, 4];

function reducer(arr) {
    return arr.filter(ele => {
        return (ele % 2 == 0 ? ele : 0)
    }).reduce((pre, curr) => pre + curr)
}



function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log(average(array1));