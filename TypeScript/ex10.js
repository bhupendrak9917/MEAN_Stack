var Person2 = /** @class */ (function () {
    function Person2(name, age, middleName) {
        this.name = name;
        this.age = age;
        this.middleName = middleName;
    }
    return Person2;
}());
var person1 = new Person2("Gitesh", 24, "Suresh");
console.log("Person 1:");
console.log("Name:", person1.name);
console.log("Age:", person1.age);
console.log("Middle Name:", person1.middleName);
var person2 = new Person2("Gitesh", 25);
console.log("\nPerson 2:");
console.log("Name:", person2.name);
console.log("Age:", person2.age);
