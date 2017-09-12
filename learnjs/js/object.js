//Object
/*
var myarr = ['Ajay','Vikash', 'Santosh'];//myarr is object
console.log(myarr);
myarr[1] = 'Hello';
console.log(myarr);
*/
/*
var arr = [];
//kay     Value
arr[0] = 'Modi';
arr[1]= 'Sonia';
arr[2]= 'Manmohan';
console.log(arr);
console.log(arr[0]);

*/
//Creating object in java script
/*
var employee = {
    'name':'ajay',
    'address':'Bangalore'
}
console.log(employee.address);
*/
//special charector 
/*
var employee = {
    'true and false':'ajay',
    address:'Bangalore'
}
console.log(employee['my name']);
*/
/*
var employee = {
    "name":'ajay',
    'address':'Bangalore'
}

console.log(employee.name);

*/
//Object with method
/*
var employee = {
    name:'ajay',
    address:'Bangalore',
    addEmployee : function(){
        return "add emplyedd";
    }
}

console.log(employee.addEmployee());
console.log(typeof employee);
*/

//Alterring properties
/*
var arr = [];
arr[0] = 'Ajay';
arr[1]  = 'Gyan';
*/
/*
var employee = {};
employee.name = 'Ajay';
employee.address = 'Bangalore';
employee.mobile = 98098778

employee.addSal = function(sal){
    return  sal+10000;
}

console.log(employee['mobile']);

console.log(employee.addSal(500));
*/
///This in object
/*
var employee = {
    name:'ajay',
    address:'Bangalore',
    addEmployee : function(){
        return this.name;
    }
}

console.log(employee.addEmployee());
*/
/*
function Employee(val){
    this.name = val;
}

var emp = new Employee('Hi Hello');

console.log(emp.name);
*/

//var employee  = new Object();
/*
var window= {
    i : 10,
    name:'Ajay'
}

console.log(emp.name);

*/
/*
function Employee(name){
    this.name = name;
}

//var emp = new Employee('Ajay');
var emp1 =  Employee('Ajay');

console.log(emp1.name);

*/
/*
addSalry = function(amt){
    return {
        amt:amt,
        name:'Ajay'
    }
}

var abc = addSalry(15);
console.log("Name:"+abc.name+" "+"Salary:"+abc.amt);
//console.log(addSalry(10));

*/

//Passing Object
var Student = {
    name:'Gyan'
}


var sStudent = Student;

console.log(sStudent.name);
console.log(typeof sStudent);