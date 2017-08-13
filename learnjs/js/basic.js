//Java Script:
//---------------------
//Node JS : client side server 
//Data types
	//String
	//Number
	//boolean
	// var, typeof 
	
Microsoft Windows [Version 6.1.7601]
Copyright (c) 2009 Microsoft Corporation.  All rights reserved.

C:\Users\akum0040>node
> var name = "Ajay";
undefined
> console.log(typeof name);
string
undefined
> var num = 10;
undefined
> console.log(typeof num);
number
undefined
> var flag = true;
undefined
> console.log(typeof flag)
boolean
undefined
> var num;
undefined
> cosole.log(typeof num);
ReferenceError: cosole is not defined
    at repl:1:1
    at sigintHandlersWrap (vm.js:22:35)
    at sigintHandlersWrap (vm.js:73:12)
    at ContextifyScript.Script.runInThisContext (vm.js:21:12)
    at REPLServer.defaultEval (repl.js:340:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:538:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
> console.log(typeof num);
number
undefined
> var num5;
undefined
> console.log(typeof num5);
undefined
undefined
> var flag= true;
undefined
> console.log(flag = true);
true
undefined
> console.log(flag = flase);
ReferenceError: flase is not defined
    at repl:1:20
    at sigintHandlersWrap (vm.js:22:35)
    at sigintHandlersWrap (vm.js:73:12)
    at ContextifyScript.Script.runInThisContext (vm.js:21:12)
    at REPLServer.defaultEval (repl.js:340:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:538:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
> console.log(flag = false);
false
undefined
> console.log(flag == false);
true
undefined
> console.log(flag === false);
true
undefined

//Object--------------
> var person = new Object();
undefined
> person.name = "Sonali";
'Sonali'
> person.mobile = "989898766";
'989898766'
> console.log(typeof person.name);
string
undefined
> console.log(typeof person.mobile);
string
undefined
> person.mobile =  98898789;
98898789
> console.log(typeof person.mobile);
number
undefined
> console.log(person.name);
Sonali
undefined
> console.log(person.mobile);
98898789
undefined
undefined
> console.log(typeof person);
object
undefined
> console.log(typeof person[name]);
undefined
undefined
> console.log(person[name]);
undefined
undefined
> console.log(person['name']);
Sonali
undefined
> console.log(person['mobile']);
98898789
undefined
> console.log(typeof person['mobile']);
number
undefined
>