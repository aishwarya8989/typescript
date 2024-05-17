// types used to do or nd and things whereas interface used to extend classes 

type instructors={
    name:string,
    age:number
}

interface students{
    name:string,
    hobby:string
}

type employees = instructors & students

const employe :employees={
    name:"aish",
    age:20,
    hobby:"dance"

}