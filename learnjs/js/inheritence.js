//Inheritence
/*
function Shape(){
    this.name = 'Shape';
    this.height = "10m";

    this.toString = function(){
        return this.name;
    }
}

function TwoDShape(){
    this.name = 'Two D Shape';

}

var s = new Shape();
var my = new TwoDShape();
Shape.prototype.width = '20m';

//inhritence in java script
TwoDShape.prototype = new Shape();//inheritence in javascript
//child object . prototype = new  parant object

//reset the constructor
TwoDShape.prototype.contructor = TwoDShape();

var my = new TwoDShape();
*/
/*
//console.log(my instanceof Shape);
console.log(my.height);
console.log(my.width);
console.log(my.toString())
/*
console.log(typeof s);
console.log(s.height);
console.log(s.width);


function Tringle(height,width){
    this.name = "I'm in Trigle";
    function getArea(){

    }
}
*/


/*
TwoDShape.prototype = new  Shape();

var my = new TwoDShape();
//console.log(my);
console.log(my instanceof TwoDShape);
console.log(my instanceof Shape);
console.log(my.name);
console.log(my.height);

*/

//=============================================
/*
function Shape(){
    this.name = 'Shape';
    this.height = "10m";

    this.toString = function(){
        return this.name;
    }
}

function TwoDShape(){
    this.name = 'Two D Shape';

}

function Tringle(side, height){
    this.name = "Tringle";
    this.side = side;
    this.height = height;
    this.getArea = function(){
       return this.side*this.height/2;
    }
}

//var my = new Tringle(5,10);
//console.log(my.side);
//console.log(my.getArea());
//console.log(my instanceof Shape);
TwoDShape.prototype = new Shape()//inhritence
TwoDShape.prototype.constructor = TwoDShape;

Tringle.prototype = new TwoDShape();//inritence
Tringle.prototype.constructor = Tringle;//reset constructor

var my = new Tringle(5,10);
console.log(my instanceof Shape);
console.log(my.name);
*/
/*
function Shape(){
    this.name = 'Shape';
    this.height = "10m";

}
*/
function Shape(){};
Shape.prototype.name = 'Shape';
Shape.prototype.height = '10m';


var s = new Shape();



var s1 = new Shape();





















