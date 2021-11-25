// classes

// class Book {
//     constructor(title, author, year){
//         this.title = title
//         this.author = author
//         this.year= year
//     }
//     getSummary(){
//         return `${this.title}, ${this.author}, ${this.year}`
//     }
//     revise(newYear){
//         this.year = newYear
//         this.revised = true
//
//     }
//     static topBookStore() {
//         return `A string...`
//     }
//
// }

// instantiate an object
//const book1 = new Book("book one", "me", "2010")

//book1.revise("2018")
//console.log(book1);

//console.log(book1.getSummary());
//console.log(Book.topBookStore());


// subclasses

class Book {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year= year
    }
    getSummary(){
        return `${this.title}, ${this.author}, ${this.year}`
    }
    revise(newYear){
        this.year = newYear
        this.revised = true

    }
    static topBookStore() {
        return `A string...`
    }

}

// mag subclass

class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year)// calls parent constructor
        this.month = month
    }

}

// instantiate magazine.
const mag1 = new Magazine('Mag one', "John doe", '2017','july')

console.log(mag1.getSummary())
