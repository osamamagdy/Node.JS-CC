//Require the fs module/ it is a built in module to deal with file systmes
const fs = require("fs");

//reading files
//To use the read file method you must pass a function that will be executed after we finish reading the file
// we make it to handle the error and store the data;
fs.readFile('./docs/blog1.txt', (err,data)=>
                                    {
                                        if (err) {
                                            console.log(err)
                                        }
                                        //The data attribute is just the buffer data (data in Bytes)
                                        console.log(data)
                                        console.log(data.toString())
                                    }
            );

//This will be finished first as the readFile() takes some time but it doesn't block our code 
console.log("last line")
//Writing files

//Here you pass the file path , the string to write , the callback function to be executed after.
//We use this callback function as the fs methods are asynchoronus, this means the code runs at the same time with them.
fs.writeFile('./docs/blog1.txt','Hello World', ()=>
                                                    {
                                                        console.log("Written")
                                                    }
            )



//directories
if (!fs.existsSync('./assets')){
        fs.mkdir('./assets',(err)=>{
                if(err)
                {
                    console.log(err)
                }
                console.log("File created")
            }
        )
    }

else{
        fs.rmdir('./assets',(err)=>{
                if(err) console.log(err)
                console.log("File deleated")
            }
        )
}


//deleting files

if (fs.existsSync('./deleteme.txt')){

    fs.unlink('./deleteme.txt',(err)=>{
                                            if(err)console.log(err)
                                            console.log("File deleated")
                                        }
            )        
}

