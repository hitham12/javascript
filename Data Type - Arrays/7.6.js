function swap(obj) {
    const object = Object.assign({}, ...Object.entries(obj).map(([key, value]) => ({
        [value]: key
    })))
    return object
}
console.log(swap);