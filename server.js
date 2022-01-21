// include the built-in http libary that comes with our node install
// we need to create and start the web server manually
let http = require('http')

// start the web server and listen for http request events which we will then handle
http.createServer((req, res) => {
    // send an HTTP response to every incoming request
    res.writeHead(200, { 'Content-Type': 'text-plain' })
    res.end('Hello world. This is our first node page. Server now running with Nodemon.')
}).listen(3000)

console.log('Node server running on port 3000')