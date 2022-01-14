// include node's file system module so we can read our text files
let fs = require('fs')

// open & read the food file
let food = fs.readFileSync('food.txt', 'utf8')

// display contents of food file
console.log(food)
console.log('We ate this stuff')

// repeat for drinks
let drinks = fs.readFileSync('drinks.txt', 'utf8')
console.log(drinks)
console.log('We drank this stuff')