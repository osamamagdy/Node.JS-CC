
////////*********This code does the same job as server.js but in a more modular way************////////////////


//require the package to use
const express = require('express');
//create the express app
const app = express();

//listen for requests
app.listen('3000');

//this the function that will be executed when get request is received
//but it will be only for the '/' route
app.get('/' , (req,res)=>{

    //send() is a very useful method from express
    //it does the same as res.write() but you don't need to set the content type in the setheader
    //it will automatically set the content type and also the status code
        //res.send('<h1>Home page</h1>');
    //or like this for passing a whole file 
    //note that the path for Express is an absolute path, so we pass the root to it as the current directory we're in
        res.sendFile('./views/index.html',{root:__dirname});
})


//handle the get request for the /about route
app.get('/about' , (req, res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
})


//redirect
app.get('/about-me',(req, res)=>{
//it handles also the status code and redirects you to the get for about route
    res.redirect('/about');
})


//404 error page

//this is called a middleware function
//it will be executed at the end of the file
//the node will take every get method from the top to bottom and checks if this is the url we asked for
//if not, it will reach the use method here and this will be executed no matter what request we asked for
//NOTE: when we send a response, the server will not continue looking and this is why we always but this at the top to be our last resort 
app.use((req, res)=>{
    //we use status as we want to tell the browser that he asked for a page that doesn't exist
    res.status(404).sendFile('./views/404.html',{root:__dirname});
})