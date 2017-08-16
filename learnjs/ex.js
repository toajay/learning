console.log("Hello");
VM181:1 Hello
undefined
var a;
undefined
conso
VM213:1 Uncaught ReferenceError: conso is not defined
    at <anonymous>:1:1
(anonymous) @ VM213:1
console.log(a);
VM237:1 undefined
undefined
a=10;
10
console.log(a);
VM243:1 10
undefined
b=20;
20
console.log(b);
VM250:1 20
undefined
name
""
console.log(name);
VM273:1 
undefined
var name;
undefined
name = "Hello";
"Hello"
console.log(name);
VM293:1 Hello
undefined
"name"
"name"
// Datatypes
//------------------------------
var a = 10;
undefined
console.log(a)
VM324:1 10
undefined
console.log(typeof a);
VM339:1 number
undefined
var a = "10";
undefined
console.log(typeof a);
VM342:1 string
undefined
var a = true;
undefined
console.log(typeof a);
VM354:1 boolean
undefined
var a = null;
undefined
console.log(typeof a);
VM371:1 object
undefined
var i;
undefined
console.log(typeof i);
VM382:1 undefined
undefined
//------------------------------------
//Operator
var a=10;
undefined
var b=20;
undefined
var c=a+b;
undefined
console.lo
undefined
console.log(c);
VM455:1 30
undefined
console.log("Add = "+c);
VM457:1 Add = 30
undefined
//--------------------------------------------
var i=10;
undefined
var j='10';
undefined
console.log(i==j);
VM187:1 true
undefined
console.log(i===j);
VM188:1 false
undefined
var a=10;
undefined
var b=20
undefined
console.log(a=b);
VM243:1 20
undefined
console.log(a==b);
VM244:1 true
undefined
var a=10;
undefined
var b=20
undefined
console.log(a==b);
VM250:1 false
undefined
console.log(a!=b);
VM255:1 true
undefined
console.log(a!==b);
VM256:1 true
undefined
var b='20';
undefined
console.log(a!==b);
VM271:1 true
undefined
//--------------------------------------
//Array
undefined
var a=[];
undefined
console.log(typeof a);
VM325:1 object
undefined
var a=[2,5,7];
undefined
a
(3) [2, 5, 7]
console.log(a);
VM369:1 (3) [2, 5, 7]
undefined
a[1]='Hello';
"Hello"
console.log(a);
VM390:1 (3) [2, "Hello", 7]
undefined
a[5]='Hi';
"Hi"
console.log(a);
VM399:1 (6) [2, "Hello", 7, undefined × 2, "Hi"]
undefined
console.log(a[4]);
VM410:1 undefined
undefined
var a='Hello';
undefined
console.log(a[0]);
VM452:1 H
undefined
console.log(a[1]);
VM458:1 e
undefined
var i=[10,20,30];
undefined
delete(i[1]);
true
i
(3) [10, undefined × 1, 30]
//------------------------------------------
//if condition
var i=10;
undefined
var i=10;
if(i>20)
	console.log('Hi');
else
	console.log('Hello');
VM599:5 Hello
undefined

if(i>20)
	console.log('Hi');
else if(i<5)
	console.log('Hello');
else
	console.log('Hey');
VM604:7 Hey
undefined
//=================================
undefined
var j=i>9?'Hello':'Hi';
undefined
console.log(j);
VM661:1 Hello
undefined
//======================================