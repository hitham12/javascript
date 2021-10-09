// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;

//     function foo() {
//         return 2;
//     }
// }
// funcA();

// undefined , 2



// var fullName = 'John Doe';
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function() {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

//rosa , underfined


// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);

//undefined , number



// function funcC() {
//     console.log("1");
// }
// funcC();

// function funcC() {
//     console.log("2");
// }
// funcC();

//    2,2

// function funcD1() {
//     d = 1;
// }
// funcD1();
// console.log(d);

// function funcD2() {
//     var e = 1;
// }
// funcD2();
// console.log(e);

// 1, e undefined


function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

//undefined ,1