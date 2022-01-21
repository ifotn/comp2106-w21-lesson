function parent() {
    let message = 'Hello World!'

    function child() {
        console.log(message)
    }

    // instead of executing the child function here, we're going to return it to the calling code block
    // omit brackets so child doesn't execute yet
    return child
}

// set up the parent function but don't call it yet
let childFunction = parent()

// now execute the function
childFunction()