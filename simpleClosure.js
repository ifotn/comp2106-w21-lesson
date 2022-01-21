// create a function containing both a variable and a child function
function parent() {
    let message = 'Hello world!'

    function child() {
        //let message = 'Some other message'
        console.log(message)
    }

    child()
}

// call the parent function
parent()