
//module http to create a local server
const http = require('http');

//we store the instance of the server
//this callback function is called each time a request is made to the server
//the req object comes with all information about the request
//the res object is what we send to the browser
const server = http.createServer((req,res)=>{
                            console.log('request made');
});

//this is to make the server start listening for requests from the browser
//localhost is the IP of our owncomputer
//port is the port number 3000
server.listen(3000, 'localhost',()=>{
    console.log('listening for requests on port 3000');
})

