
//To import the file app functionality as a black box
//Note that you can't access the file itself you just use it as a black box.
//To make yourself able to do this, you have to explecitly export them in app.js.
const xyz = require('./app.js')

console.log(xyz.people)

// Another built in module that you can require using node 
const os = require('os')

console.log(os)