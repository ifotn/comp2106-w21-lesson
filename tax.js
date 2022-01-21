// use node's http module to start a web server
let http = require('http')

// include node's url library so we can read url params
let url = require('url')

// add accounting package for # format
let accounting = require('accounting')

// start server
http.createServer((request, response) => {
    // http header
    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})

    // page content
    response.write('<h1>Tax Calculator</h1>')

    // read url params (the part after the ?) like PHP $_GET
    let query = url.parse(request.url, true).query

    // get the param called "subtotal" like $_GET['subTotal'] in PHP
    let subTotal = parseFloat(query.subTotal)

    // calc tax & total from subTotal
    let tax = subTotal * 0.13
    let total = subTotal + tax

    // display values 
    response.write("<h2>Sub Total: " + accounting.formatMoney(subTotal) + "</h2>" + 
        "<h2>Tax: " + accounting.formatMoney(tax) + "</h2>" + 
        "<h2>Total: " + accounting.formatMoney(total) + "</h2>")

    // end response
    response.end()
}).listen(3000)