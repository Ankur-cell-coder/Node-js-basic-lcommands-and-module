console.log('hello world!');

//http module
const http = require('http')
const fs=require('fs')
const path=require('path')

const app = http.createServer((req,res)=>{
    //if we just send a normal message to server
   // res.end('Hello from index page')

   //if we want to send any file
   fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    if(err)
    throw(err);
    res.end(content)
   })
//    res.sendFile()
})

const PORT=4000;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})