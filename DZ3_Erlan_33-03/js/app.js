var array = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var object = {}
for (var result of array) {
    object[result] = (object[result] || 0) + 1
}
console.log(object);

// var array = ['name', 'John', 'lastname', 'Black', 'age', 23]
// var object = {}

// for (var [key, value] of array.entries()) {
//     if (key % 2 === 0) {
//         object[value] = array[key + 1]
//     } else {
//         object[array[key - 1]]
//     }
// }
// console.log(object);

// var dataType = (datatype)=> console.log(typeof datatype)
// dataType(21)