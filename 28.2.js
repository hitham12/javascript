const obj = {
    name: 'Hitham',

    printName: function() {
        console.log(this.name);
    },

    printNameSecond: function () {
        let name = this.name
        setTimeout(function () {
            console.log(name);
        }, 1000);
    }
}
obj.printName()
obj.printNameSecond()