interface User{
    name: string;
    age?: number;
    greet(phrase:string):void;
}

class People implements User {
    name: string;
    age?: number;
// 
    constructor(n:string , a:number) {
        this.name=n
    }

    greet(phrase:string){
        console.log(`${phrase},${this.name}`);
        
    }
}

let x=new People("aish",22);

console.log(x.greet("hy "));
