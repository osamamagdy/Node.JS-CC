
//module http to create a local server
const http = require('http');
const fs = require('fs');
//we store the instance of the server
//this callback function is called each time a request is made to the server
//the req object comes with all information about the request
//the res object is what we send to the browser
const server = http.createServer((req,res)=>{
                            console.log(req.url , req.method);
                            //req.url is the path that the user requests after the localhost:3000
                        /*
                            //set the header named content type of the response
                            res.setHeader('Content-Type', 'text/plain');

                            //set the content of the response
                            res.write('Hello');
                        */

                        /*
                        //set the header named content type of the response to html text
                            res.setHeader('Content-Type', 'text/html');

                        //set the content of the response by html tags
                            res.write('<p>Hello1</p>');
                            res.write('<p>Hello2</p>');
                        */    




                        
                        /*
                        //set the header named content type of the response to html file
                            res.setHeader('Content-Type', 'text/html');

                        //set the content of the response by html file path using filestream
                            let path = './views/';
                            
                            switch (req.url) {
                                case '/':
                                    path += 'index.html';
                                    break;
                                case '/about':
                                    path += 'about.html';
                                    break;
                                default:
                                    path += '404.html';
                                    break;
                            }
                            fs.readFile(path , (err, data) =>
                            {
                                if (err) {
                                            console.log(err);
                                            res.end();
                                        }
                                else {
                                    res.write(data);
                                    res.end();
                                    }
                            }
                            )

                        */    


                        /*
                        ///////////////Status codes for each case on response****************
                        //set the header named content type of the response to html file
                        res.setHeader('Content-Type', 'text/html');

                        //set the content of the response by html file path using filestream
                            let path = './views/';
                            
                            switch (req.url) {
                                case '/':
                                    path += 'index.html';
                                    res.statusCode = 200;
                                    break;
                                case '/about':
                                    path += 'about.html';
                                    res.statusCode = 200;
                                    break;
                                default:
                                    path += '404.html';
                                    res.statusCode = 404;
                                    break;
                            }
                            fs.readFile(path , (err, data) =>
                            {
                                if (err) {
                                            console.log(err);
                                            res.end();
                                        }
                                else {
                                    res.write(data);
                                    res.end();
                                    }
                            }
                            )

                            */

                            ////////////Redirect***********

                                                    ///////////////Status codes for each case on response****************
                        //set the header named content type of the response to html file
                        res.setHeader('Content-Type', 'text/html');

                        //set the content of the response by html file path using filestream
                            let path = './views/';
                            
                            switch (req.url) {
                                case '/':
                                    path += 'index.html';
                                    res.statusCode = 200;
                                    break;
                                case '/about':
                                    path += 'about.html';
                                    res.statusCode = 200;
                                    break;
                                case '/about-me':
                                    path += 'about.html';
                                    //Set to the status code that means permanent redirect
                                    res.statusCode = 301;
                                    //Change the res location to the new url
                                    res.setHeader('location','/about')
                                    break;
                                default:
                                    path += '404.html';
                                    res.statusCode = 404;
                                    break;
                            }
                            fs.readFile(path , (err, data) =>
                            {
                                if (err) {
                                            console.log(err);
                                            res.end();
                                        }
                                else {
                                    res.write(data);
                                    res.end();
                                    }
                            }
                            )


});

//this is to make the server start listening for requests from the browser
//localhost is the IP of our owncomputer
//port is the port number 3000
server.listen(3000, 'localhost',()=>{
    console.log('listening for requests on port 3000');
})

