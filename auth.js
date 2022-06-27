
const register= function(username){
    console.log(`User ${username} registered`)

}

const login=function(username,password){
    console.log(`User ${username} has been looged in`)
}


//if we need to export more than one function 
module.exports={register,login};


// if only one function 
//module.exports=register