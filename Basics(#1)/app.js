//Window is a global opject in the browser
//This means you can use its methods without using window. before the method name 
//But in node it's not 
//The global object in node is "global"

console.log(global)

//This is a method that will call the function after 3000 ms
//You must pass a function call or you can implement the function in the call like we did
setTimeout(  () => {
                        console.log("Hello")
                    }
            ,3000);




//To get the directory of the current file
console.log(__dirname)
//To get the directory of the current file with the filename
console.log(__filename)


////////////////////////////////////////////////////////////////////////

const people = ['osama','magdy','aied'];

console.log(people)

module.exports = {people};