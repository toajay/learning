// Prototype
/*
add = function(a,b,c){
    return a+b+c;
}
//console.log(add(5,6));//leng,ht, prototype, constructor
console.log(add.prototype)
*/
/*
function Employee(name, address){
    this.name = name;
    this.address = address;
    this.getEmpDetails = function(){
        return "Name:"+this.name+"  address:"+this.address;
    }
}
/*
var emp = new Employee('Ajay','Bangalore');
Employee.prototype.sal = 100;
Employee.prototype.mobile = 94927;
Employee.prototype.sayHello = function(){
    return "Say Hello";
}
*/
/*
Employee.prototype = {
    sal:100,
    mobile:8373838,
    sayHello : function(){
        return "Say Hello";
    }
};

Employee.prototype.getVaue = function(val){
    return this[val];
}

var emp = new Employee('Ajay','Bangalore');
console.log(emp.sal);
console.log(emp.name);
console.log(emp.sayHello());
console.log(emp.getVaue('mobile'));
*/
/*
function Employee(name){
    this.name = name;    
}
var emp = new Employee('Ajay');
Employee.prototype.name = 'Hello';

console.log(emp.name);
*/
/*
var a = [1, 2, 3];
for (var i in a) {
    console.log(a[i]);
}
*/
/*
function Employee(name, address){
    this.name = name,
    this.address = address
}
*/
var  employee={
    i:5,
    j:6
}
for (var i in employee) {
    console.log(employee[i]);
}






