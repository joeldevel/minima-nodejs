/*
 * Serves three pages to a web browser
 * Purpose: Learn NodeJS
 * Author: joeldevel
 * How to run it: node server.js
 **/

// import module 
const http = require('http');
// define port
const port = 3000;
// create server
const server = http.createServer(handleRequests);

// handleRequests is a callback, the request and response parameters
// are passed by the createServer method from the http object.
// request and response are objects and have methods and properties.
// 'url' is a property and 'end' is a method
function handleRequests(request, response) {
    //Set headers
    response.statusCode = 200; // All OK
    response.setHeader('Content-Type', 'text/html');
    // find what url is the request from
    if(request.url === '/') {
        console.log("hit  home");
        return response.end("<h1>Welcome to home page</h1>");
    } else if(request.url === '/about') {
        console.log("hit about");
        return response.end("<h1>Welcome to about page</h1>");
    } else if(request.url === '/contact') {
        console.log("hit contact");
        return response.end("<h1>Contact us!</h1>");
    } else {
        return response.end("<p>page not found, <a href='/'>go back</a></p>");
    }
}

// first arg is the port and the second is a callback that is called
// when starting
server.listen(port, () => {
  console.log(`This server is listening on port ${port}, go to the browser`);
});
