function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;

    this.isSquare = () => {
        return (a == b && b == c && c == d)
    }
}

let isSquareEquals = new Square(2,2,2,2)

console.log(isSquareEquals.isSquare());