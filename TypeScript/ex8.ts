class Person1{
    private name: string
    protected age: number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    greet(): string{
        return `Hello, my name is ${this.name}.`
    }
}
class Student1 extends Person1 {
    studentId: number
    constructor(name: string, age: number, studentId: number) {
        super(name, age)
        this.studentId = studentId
    }
    greet(): string {
        return `${super.greet()} I am ${this.age} years old, and my student ID is ${this.studentId}.`
    }
}
const person8_1 = new Person1("Ramesh", 24)
console.log(person8_1.name)
console.log(person8_1.age)
const student8_1 = new Student1("Suresh", 23, 12345)
console.log(student8_1.name)
console.log(student8_1.age)
console.log(student8_1.greet())