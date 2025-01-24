class Student12{
    constructor(public studentName: string){}
    printStudent(){
        setTimeout(() => {
            console.log(this.studentName)
        }, 1000)
    }
}
const student1 = new Student12("Binod")
student1.printStudent()