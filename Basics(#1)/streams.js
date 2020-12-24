//We use streams to deal with buffers of data without waiting for the whole file to be read

//First you get the FS module
const fs = require("fs");

//first you pass the file path / then the encoding type (if you don't do that you will see data the Bytes)
const readStream = fs.createReadStream('./docs/blog3.txt',encoding="utf8");

//the you pass the file path to write in it
const writeStream = fs.createWriteStream('./docs/blog4.txt')

//Start reading data as 'chunk' from the file and write it in the other file
//this callback function will be executed after reading every buffer (buffer is a certain size of memory)
/*readStream.on('data', (chunk) =>{
                                    console.log('-------New Chunk----------')
                                    console.log(chunk)
                                    writeStream.write('\nNew Chunk\n')
                                    writeStream.write(chunk)
                                }
            )
*/
//or you can use pipe // pipe is a method in the object readStream that copies all its data to the writeStream
readStream.pipe(writeStream);
