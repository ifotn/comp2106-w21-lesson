let fs = require('fs')

// read food asynchronously (non-blocking)
// start reading the file & use a callback function to print contents when done
let food = fs.readFile('food.txt', 'utf8', (err, data) => {
    console.log(data)
})

console.log('We ate this stuff')

let drinks = fs.readFile('drinks.txt', 'utf8', (err, data) => {
    console.log(data)
})

console.log('We drank this stuff')

