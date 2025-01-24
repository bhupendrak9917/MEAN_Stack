var Person16 = /** @class */ (function () {
    function Person16(name, nickname) {
        this.name = name;
        this.nickname = nickname;
    }
    Person16.prototype.greet = function (name) {
        if (name) {
            console.log("Hello, ".concat(name, "!"));
        }
        else if (this.nickname) {
            console.log("Hello, I'm ".concat(this.nickname, "!"));
        }
        else {
            console.log("Hello, Everyone!");
        }
    };
    Person16.prototype.Hobbies = function (hobbies) {
        if (hobbies && hobbies.length > 0) {
            console.log("Hobbies:");
            hobbies.forEach(function (hobby, index) {
                console.log("".concat(index + 1, ". ").concat(hobby));
            });
        }
        else {
            console.log("No hobbies provided.");
        }
    };
    return Person16;
}());
var person1 = new Person16("Ramesh", "Suresh");
person1.greet();
person1.greet("Kamlesh");
person1.Hobbies(["Running", "Table Tennis", "Traveling"]);
var person2 = new Person16("Devesh");
person2.greet();
person2.Hobbies();
