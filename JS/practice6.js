const student = {
    name: "Alice",
    courses: [],
    addCourse(course) {
        this.courses.push(course);
    }
}
  
student.addCourse("Mathematics")
student.addCourse("Computer Science")
console.log(student)
  