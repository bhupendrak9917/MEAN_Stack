var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, ".");
    };
    return Person1;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student1.prototype.greet = function () {
        return "".concat(_super.prototype.greet.call(this), " I am ").concat(this.age, " years old, and my student ID is ").concat(this.studentId, ".");
    };
    return Student1;
}(Person1));
var person8_1 = new Person1("Ramesh", 24);
console.log(person8_1.name);
console.log(person8_1.age);
var student8_1 = new Student1("Suresh", 23, 12345);
console.log(student8_1.name);
console.log(student8_1.age);
console.log(student8_1.greet());
