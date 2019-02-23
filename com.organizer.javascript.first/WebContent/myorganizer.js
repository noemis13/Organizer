/**
 * 
 */

document.writeln("<b>Bold Hello World via an external js file!</b>");
let mytext= "Hello, hello. Turn the radio on. Is there anybody out there...";

/* declare variables t o do some math*/
a = 5; // global variable avoid this
let b = 1;
let result = a - b;

/* concatenate two strings*/
let mytext1 = "I like Spanish";
let mytext2 = " because the melody is nice.";
document.writeln("\n");
document.writeln(mytext1 + mytext2);



var Point2D = function (x, y) {
    this.move(x, y);
};
Point2D.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};
var Point3D = function (x, y, z) {
    Point2D.call(this, x, y);
    this.move(x, y, z);
};
Point3D.prototype = Object.create(Point2D.prototype);
Point3D.prototype.constructor = Point3D;
Point3D.prototype.move = function (x, y, z) {
    Point2D.prototype.move(x, y);
    this.z = z;
}
var point3d = new Point3D(5, 3, 6);
console.log(point3d.x); // => 5
console.log(point3d.z); // => 6

