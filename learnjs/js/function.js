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
/*
function invoke_add(function(){return 1;}, function(){return 2;}){

}

*/
/*
multiplyNum = function(a, b, c){
    var arrNum = [];
    for(var i = 0;i < arguments.length;i++){
        arrNum[i] = arguments[i]*2;
    }
    return arrNum;
}

addNum = function(i){
    i=i+1;
    return i;
} 

var arrResult = multiplyNum(10,20,30);

for(var i = 0; i<arrResult.length; i++ ){
    arrResult[i] = addNum(arrResult[i]);
}

console.log(arrResult);
console.log(addNum(5));

*/
/*
multiplyNum = function(a, b, c, callback){
    var arrNum = [];
    for(var i = 0;i < arguments.length;i++){
        arrNum[i] = callback(arguments[i]*2);
    }
    return arrNum;
}

addNum = function(i){
    i=i+1;
    return i;
} 

minusNum = function(j){
    j = j-k;
    return j;
}
//var arrResult = multiplyNum(10,20,30, addNum);
var arrResult = multiplyNum(10,20,30, minusNum);
console.log(arrResult);

*/

/*
multiplyNum = function(a, b, c, callback){
    var arrNum = [];
    for(var i = 0;i < arguments.length;i++){
        arrNum[i] = callback(arguments[i]*2);
    }
    return arrNum;
}

//var arrResult = multiplyNum(10,20,30, addNum);
var arrResult = multiplyNum(10,20,30, function(i){
    i = i+2;
    return i;
});
console.log(arrResult);


*/
// self executble function
/*
addNum = function(a,b){
    return a+b;
}

console.log(addNum(4,10));
*/
/*
(
    function(name){
        console.log(name);
    }
)('Ajay');

*/
//private function

sayHello = function(){
    console.log('Hello');
    sayHi = function(){
        console.log('Hi');
        return 'Abc';
    }
    return sayHi;
}
console.log(sayHello()());

//function return a function
/*
sayHello = function(){
    console.log('Hello');
    return sayHi = function(){
        console.log('Hi');
        return 'Ajay';
    }    
}

//var result = sayHello();

//console.log(result());
console.log(sayHello()());
*/



