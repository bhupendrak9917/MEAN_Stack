var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var rectangle = new Rectangle(15, 20);
console.log("Rectangle area: ".concat(rectangle.getArea()));
console.log("Rectangle perimeter: ".concat(rectangle.getPerimeter()));
var circle = new Circle(20);
console.log("Circle radius: ".concat(circle.getArea()));
console.log("Circle perimeter: ".concat(circle.getPerimeter()));
