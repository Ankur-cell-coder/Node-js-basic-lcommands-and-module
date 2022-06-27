// const register=require('./auth')


// if multiple then auth is a object
// const auth=require('./auth')

// auth.register('Ankur')
// auth.login('Ankur Kumar')



//core module
const path=require('path')

//dirname
//it gives us folder name of given file
console.log('Folder name:',path.dirname(__filename))

//filename
console.log('File name:',path.basename(__filename))

//extension of file
console.log('Extension name:',path.extname(__filename))

//parse
//this method returns whole things as one object
console.log('parse:',path.parse(__filename))

//join 
//it join all passed argunment and generate one url 
console.log('Join :',path.join(__dirname,'order','products','rating'))


/////////////////////////////////////////////////////////////////
//file system module fs module

const fs=require('fs')

//make a directory
//it takes two argunment one file name with its path second err
//if folder is already created it shows error
// fs.mkdir(path.join(__dirname,'/test'),(err)=>
// {
//     if(err)
//     {
//         console.log('something went wrong');
//         return;
//     }
//     else{
//       console.log('folder created');
//     }
// })

//create a file
//it takes three parameter second parameter is what we have to write in that file
//if we call this function and test.txt i s already exist then in that case
//it goes into that file first delete all content of that file and then rewrite all data
// fs.writeFile(path.join(__dirname,'test','test.txt'),'Hello Node',(err)=>
// {
//     if(err)
//     {
//         throw(err);
//     }
//     //if we want that file data should not deleted and new data get added in that
//     fs.appendFile(path.join(__dirname,'test','test.txt'),'More data',(err)=>{
//         if(err)
//          throw err;
//         console.log('Data entered...')
//     })
//     console.log('file created');
// })


//read a file
fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=>{
    if(err)
    throw(err);
    // else
    // console.log(data)   if we just print like this we get buffer data

    //to get data in form 
    const content= Buffer.from(data)
    console.log(content.toString());
    
})



////////////////////////////////////////////////////////
//operating system module

const os=require('os')

//type of os
console.log('Os type:',os.type())

//cpu architecture
console.log('Cpu architecture',os.arch())

//free memory
console.log('Free memory',os.freemem())



/////////////////////////////////////////////
//events module

const Emitter=require('events')

const myEmitter =new Emitter()

// myEmitter.on('somename',(data)=>{
//     console.log(data)
// })

// myEmitter.emit('somename',{
//     name:'Ankur'
// })

//here auth class is inherited emitter property
class Auth extends Emitter {
    register(username){
        console.log('Registered successfully....')
        this.emit('registered',username)
    }
}

const auth=new Auth()

//verify email
auth.on('registered',(data)=>{
    console.log(`sending email to ${data}`);
})

auth.register('Ankur');






