class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
    getInfo(){
        return `${this.title} by ${this.author} (${this.year})`
    }
}
const myBook = new Book("DO Epic Shit", "Ankur Warikoo", 2021)
console.log(myBook.getInfo())