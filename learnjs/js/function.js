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


