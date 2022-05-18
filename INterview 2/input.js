// function parent (x){
//     y = 20
//     return function (z){
//         return x +y + z
//     }

// }

// let child = parent(10)

// console.log(child(30));

let obj1 = {name:'dil', class:1}
let obj2 = obj1;
obj1.name = 'sheen'
console.log(obj2);