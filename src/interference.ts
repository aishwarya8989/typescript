interface User{
    firstName:string,
    age:number
    hobby?:string
}

function demo (user:User){
   console.log("hyy ",user.firstName);
         
}

demo({
    firstName:"aish",
    age:20,
    // hobby:"dance"
})
