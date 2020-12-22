const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// listen for requests
app.listen(3000);


//Create our own middleware 
//this will fire at every request as it is the top 
//As we don't send the response, so this is supposed to continue the file
//But the problem is that after executing the middleware, the browser doesn't know what to do next
//so we guide him using next(), which simply means continue your work
app.use((req,res , next)=>{
  console.log('new request made');
  console.log( 'host: ' , req.hostname);
  console.log('path: ',req.hostpath);
  console.log('method: ',req.method);
  next();
})



app.use((req,res , next)=>{
  console.log('the next middleware');
  next();
})




// register view engine
app.set('view engine', 'ejs');

// middleware & static files(.i.e CSS files or images)
//the problem is that our browser protects all static files that we use 
//this means you can't referrences them in the IP address (like if you type localhost:3000/styles.css)--> this will give you 404
//and also you can't refer to this css file in the .ejs //you can't write your styles in .css and pass it 
//the way to solve this problem is that we explicitly tell the browser that:
// it's allowed to make the files inside the folder name "public" --> make them public to anything
// if you type localhost:3000/styles.css--> you will see the css code in it.
app.use(express.static('public'));


//uses the morgan package
app.use(morgan('dev'));







app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
