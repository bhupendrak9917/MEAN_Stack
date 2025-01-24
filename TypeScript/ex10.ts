interface PersonInfo{
    name: string
    age: number
    middleName?: string
}
class Person2 implements PersonInfo{
    constructor(
      public name: string,
      public age: number,
      public middleName?: string
    ) {}
}
const person1 = new Person2("Rohit", 37, "Gurunath")
console.log("Person 1:")
console.log("Name:", person1.name)
console.log("Age:", person1.age)
console.log("Middle Name:", person1.middleName)
const person2 = new Person2("Rajesh", 21)
console.log("\nPerson 2:")
console.log("Name:", person2.name)
console.log("Age:", person2.age)