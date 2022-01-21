// use counter variable with a closure this time 
function closedFunction() {
    let counter = 0

    // this time increment within a child function that's assigned to a variable
    // alternatively written as let increment = () => {}
    let increment = function() {
        counter++
        console.log(counter)
    }

    return increment
}

// assign a variable to the function, but don't execute it immediately
let countMe = closedFunction()

// execute the function several times
countMe()
countMe()
countMe()