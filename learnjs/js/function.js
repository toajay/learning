//Function
//--------------------------------------
// Declaration
// Input argument
// funciton body
// return statement
/*
function sum(input agrument){// declaration
// funciton body
// return statement;
}
*/
/*
function sum(a, b){
    var result = a+b;
    return result;
}

console.log(sum(4,5));

*/
/*
function abc(){
    console.log('Hello');
}

var a = abc();
console.log(a);

C:\training\codebase\learning\learnjs\js>node function.js
Hello
undefined
*/
/*
function sayArgument(){
    var sum = 0;
    
    for(var i=0;i<arguments.length();i++){
        sum = sum+arguments[i];
    }
    
    return arguments;
}
console.log(sayArgument(1,2,5,6,7,9));
*/
//--------------------------------------
/*
parseInt('123');
123
var i = '123';
undefined
consolel.log(typeof i);
VM277:1 Uncaught ReferenceError: consolel is not defined
    at <anonymous>:1:1
(anonymous) @ VM277:1
console.log(typeof i);
VM281:1 string
undefined
var j = parseInt(i);
undefined
console.log(typeof j);
VM305:1 number
undefined
console.log(parseInt('123ajhgd');
VM339:1 Uncaught SyntaxError: missing ) after argument list
console.log(parseInt('123ajhgd'));
VM340:1 123
undefined
console.log(parseInt('1234ajhgd77653778'));
VM342:1 1234
undefined

*/
//---------parseFloat();
/*
var a = 123;
function f() {
console.log(a);
var a = 1;
console.log(a);
}
f();

*/
/*
a=10;
function add(){
    a = 5;
   return a;
   
}
console.log(a);
console.log(add());
console.log(a);
*/
/*
var a = 123;
function f() {
console.log(a);
a = 1;
console.log(a);
}

f();
*/
/*
name = "Vikas";
function printName(){
    console.log(name);
    var name = 'Chandan';
    console.log(name);
    return name;
}
printName();
*/

//name = 'Ajay';

//function is a data in java script
// How???

// function add(){
//     return 1+1;
// }

//var result = add();
//console.log(typeof add);

//way to define function in java script

//1.
// function add(){
//     return 1+1;
// }
/*
add = function(){
    return 1+1;
}
console.log(add());
*/
//'Ajay';'undefined', null

/*
var add = function(){
    return 1+1;
}
console.log(add());


var add1 = add;

console.log(delete(add));
//console.log(add());
console.log(add1);

*/
//anonymous function-----------------
//function (a){ return a;}

/*
add = function(){
    return 6;
}
console.log(add());
*/
//Function call back

/*
function add(i,j){
    return i+j;
}

var abc = add;
delete(add);
*/

/*
function add(i, j){
    return i+j;
}
console.log(add(1,2));
*/
//function as a parameter
/*
function add_add(a,b){
    return a()+b();
}

function one(){
    return 5;
}

function two(){
    return 6;
}
console.log(add_add(one, two));

*/