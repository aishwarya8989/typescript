interface User{
    firstName:string,
    age:number
}

function demo (user:User){
   console.log("hyy ",user.firstName);
         
}

demo({
    firstName:"aish",
    age:20
})
