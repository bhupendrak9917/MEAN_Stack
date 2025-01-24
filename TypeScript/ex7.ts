class Person{
    name: string
    age: number
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    greet(): string{
        return `Hello, my name is ${this.name}.`
    }
}
class Student extends Person{
    studentId: number
    constructor(name: string, age: number, studentId: number){
        super(name, age)
        this.studentId = studentId
    }
    greet(): string{
        return `${super.greet()} My student ID is ${this.studentId}.`
    }
}
class GraduateStudent extends Student{
    degree: string
    constructor(name: string, age: number, studentId: number, degree: string){
        super(name, age, studentId)
        this.degree = degree
    }
    greet(): string{
        return `${super.greet()} I have a degree in ${this.degree}.`
    }
}
const person = new Person("Shankar", 21)
console.log(person.greet())
const student = new Student("Krishna", 23, 12345)
console.log(student.greet())
const graduateStudent = new GraduateStudent("Ram", 25, 67890, "Computer Science")
console.log(graduateStudent.greet())