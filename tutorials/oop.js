// traversy media refresher on oop.

// object.property  or object.method

// const s = "hello"

// const t = new String('Hello world')

// const a = new Array('one',"two")

// console.log(typeof(t), typeof(s), typeof(a)) // object, string, object


// const book1 = {
//     title: "Book One",
//     author: "John Doe",
//     year: '2013',
//     getSummary: function(){
//         return `${this.title}, was written in ${this.year}`
//     }
// }

// console.log(book1.getSummary());
// console.log(Object.keys(book1));
// console.log(Object.values(book1));


// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//
//     this.getSummary = function(){
//         return `${this.title} was written in ${this.year}`
//     }
//     console.log('Book Initalized.');
// }
//
// Book.prototype.getSummary2 = function(){
//     return `${this.title} was written in ${this.year}, but this is diff`;
// }
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - parseInt(this.year) // getFullYear gets 4 digs
//     return `${this.title} was written ${years} year's ago`
// }
// Book.prototype.revise = function(newYear){
//     this.year = newYear
//     this.revised = true
//
// }



// will run on instantiation

// const bookOne = new Book("title one", "author one", 2013)
// const bookTwo = new Book(" title two","author two", "2020")
// bookTwo.revise("2021")

// console.log(bookOne.getSummary2())
// console.log(bookOne.getAge())
// console.log(bookTwo);


// inheritance



function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.getSummary = function(){
    return `${this.title} was written in ${this.year}, by ${this.author}`;
}

// mag constructor

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year)
    // this.title = title
    // this.author = author
    // this.year = year
    this.month = month

}
// inheritance
Magazine.prototype = Object.create(Book.prototype)

const mag1 = new Magazine('Mag one', "Me", 2015, 'June')

// use magazine constructor
Magazine.prototype.constructor = Magazine



// console.log(mag1);
// console.log(mag1.getSummary());


const BookProtos = {
    getSum: function() {
        return `${this.title}, title, ${this.year}, year, ${this.author}, author`
    },
    getYears: function() {
        const year = new Date().getFullYear() -  this.year//parseInt(this.year)
        return `${year} years old`
    }
}
 const book1 = Object.create(BookProtos)
 book1.title = "book one"
 book1.author = "Me"
 book1.year = "2013"

console.log(book1)

console.log(book1.getYears())
