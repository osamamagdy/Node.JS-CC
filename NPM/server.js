
//module http to create a local server
const http = require('http');
const fs = require('fs');

//when you type npm install in the terminal, it will look for the packages inside these dependencies and install them
//a lodash is a NPM package that need to be installed before working on this code
const _ = require('lodash');
//we store the instance of the server
//this callback function is called each time a request is made to the server
//the req object comes with all information about the request
//the res object is what we send to the browser
const server = http.createServer((req,res)=>{
                            //res is the response///req is the request
                            //req.url is the path that the user requests after the localhost:3000
                            ////////////Redirect***********


                            //lodash using 

                            //random is a method to generate random numbers between 0 and 20;
                            //remember that your lodash object name is now '_' , you can name it anything but this is the common practice
                            const num = _.random(0,20);
                            console.log(num);

                            //here you define the function greet and it's inside the method once
                            //remember that in javascript, this code means you define the function greet and "=>" allows you to write the implementation next to it
                            const greet = _.once(()=>{
                                console.log('hello');
                            });
                            //you called it twice but it's defined via once() mithod so it will be executed onetime only
                            greet();
                            greet();

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

