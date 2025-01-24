var Student12 = /** @class */ (function () {
    function Student12(studentName) {
        this.studentName = studentName;
    }
    Student12.prototype.printStudent = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.studentName);
        }, 1000);
    };
    return Student12;
}());
var student1 = new Student12("Amit");
student1.printStudent();
