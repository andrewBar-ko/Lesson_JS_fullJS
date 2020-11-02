'use strict';

function First(hello) {
    this.hello = hello;

    First.prototype.writeHiPar = function() {
        console.log(this.hello);
    };

}

function Second() {
   
    First.prototype.writeHiPar();
 
}

const hi = new First("Привет я метод родителя!");
const hiChild = new First("А я наследуемый метод!");

hi.writeHiPar();
hiChild.writeHiPar();