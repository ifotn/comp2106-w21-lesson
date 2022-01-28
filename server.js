// include express
let express = require('express')

// create a new express application
let app = express()

// create hello function
let hello = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
    res.end('Hello World')
}

let goodbye = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
    res.end('Goodbye World')
}

let index = (req, res) => {
    // if requested url is the root (ie. '/') show the home page
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
        res.end('Home Page')
    }
    else {
       // otherwise, url is known => 404 
       res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'})
       res.end('<h1>Page Not Found</h1>')
    }   
}

// direct requests to our response functions - order of precedence matters
app.use('/hello', hello)
app.use('/goodbye', goodbye)
app.use('/', index)  //  '/' = the root path

// start express web server on port 3000 (the default)
app.listen(3000)

console.log('Express running on port 3000')