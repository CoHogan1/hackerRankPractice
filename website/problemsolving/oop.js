const book1 = {
    title: "value1",
    author: "name1",
    year: 2001,
    getSum: function(){
        console.log(`${this.title} was written in ${this.year} by ${this.author}`);
        return `${this.title} was written in ${this.year} by ${this.author}`
    }
}

function Book(title, author, year){
    this.title  = title
    this.author = author
    this.year   = year

}

const one = new Book("book1","john", 2013)
const two = new Book("book2","jane", 2003)


let test = [1,2,3,4,5,6,7,8,9,0,9,6,7,5,3,2,4,5,3,2,5,6,1,2]

function getDups(arr){
    let memo = {}
    let ans = {}
    arr.forEach((item, index)=>{
        memo[item] = memo[item] ? memo[item] + 1 : 1
        if (memo[item] > 1){
            ans[item] = ans[item] ? ans[item] + 1 : 1
        }
    })

    console.log(ans, " Dups")
    return ans
}

//getDups(test)
