//ES5 AND ES6 Diff.
//1. from var to let/const
//ES5
/*
var x = 5;
function chekRendom(random1){
    var x;
    if(random1){
        x = Math.random();//a: scope of function
        return x; // return from a
    }
    return x;// return from a
}

console.log(x);
console.log(chekRendom(false));//undefined
console.log(chekRendom(true));// print some random value
*/
//ES6: added let/const: blocked scoped
//Eg:-
/*
let x = 10;
function chekRendom(random1){
    if(random1){
        let x = Math.random();//a: scope of function
        return x; // return from a
    }
    return x;// return from a
}
console.log(x);
console.log(chekRendom(false));//undefined
console.log(chekRendom(true));// print some random value
*/
//2. From IIFE(Immediately invoked function expression) to blocks
/*
(function(){
    var name = 'Ajay';
}());
console.log(name);
*/
//es6 eg;
{
    let name = "Ajay";// blocked level
}
console.log(name);