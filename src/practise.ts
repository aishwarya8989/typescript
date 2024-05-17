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