
function firstElement(arr) {
    return arr[0]
}

module.exports.functionOneKey = firstElement

function sortArray(arr) {
    return arr.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    })
}

const ary = ['first', 'second', 'third', 'fourth', 'fifth'];


function showFirst(arr){
    return console.log(arr[0])
}


console.log("I am connected")
const _ = require('lodash');
const data = require('./data')
const functions = require('./functions')

console.log(data)
console.log(functions);


console.log(sortArray([23, 55, 2, 21]))
console.log(sortArray(['test', 'Yes', 'No', 'Maybe']))

console.log('something new')

console.log(showFirst(['first', 'second', 'third', 'fourth', 'fifth']))

console.log(_.head(data.numbersArrayKey))
console.log(_.initial(data.numbersArrayKey))

