class Person16{
    name: string
    nickname?: string
    constructor(name: string, nickname?: string){
        this.name = name
        this.nickname = nickname
    }
    greet(name?: string): void{
        if (name) {
            console.log(`Hello, ${name}!`)
        } else if (this.nickname) {
            console.log(`Hello, I'm ${this.nickname}!`)
        } else {
            console.log("Hello, Everyone!")
        }
    }
    Hobbies(hobbies?: string[]): void{
        if (hobbies && hobbies.length > 0) {
            console.log("Hobbies:")
            hobbies.forEach((hobby, index) =>{
                console.log(`${index + 1}. ${hobby}`)
            })
        } else{
            console.log("No hobbies provided.")
        }
    }
}
const person1 = new Person16("Ramesh", "Suresh")
person1.greet()
person1.greet("Kamlesh")
person1.Hobbies(["Running", "Table Tennis", "Traveling"])
const person2 = new Person16("Devesh")
person2.greet()
person2.Hobbies()
