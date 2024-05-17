"use strict";
class People {
    // 
    constructor(n, a) {
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase},${this.name}`);
    }
}
let x = new People("aish", 22);
console.log(x.greet("hy "));
