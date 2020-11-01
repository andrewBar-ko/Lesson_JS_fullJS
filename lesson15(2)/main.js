'use strict';

class First {
    constructor(hello) {
       this.hello = hello;
    }

    writeHiPar() {
        console.log(this.hello);
    }
}

class Second extends First {
    constructor(hello, child) {
        super(hello);
        this.child = child;
    }
    
    writeHiPar() {
        console.log(this.child);
    }

}

const hi = new First("Привет я метод родителя!");
const hiChild = new First("А я наследуемый метод!");

setTimeout(() => hi.writeHiPar(), 500);
setTimeout(() => hiChild.writeHiPar(), 1000);