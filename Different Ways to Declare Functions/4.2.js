function grades(number) {

    if (number <= 64) {
        return 'F'
    } else if (number <= 69) {
        return 'D'
    } else if (number <= 79) {
        return 'C'
    } else if (number <= 89) {
        return 'B'
    } else {

        return 'A'

    }

}
console.log(`grades: ${grades(64)}`);