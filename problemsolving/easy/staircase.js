function staircase(n) {
    let copy = "x".repeat(n)
    let count = n + 1
    copy.split('').forEach((item, index)=>{
        console.log(index +1, count);
        count--
        return " ".repeat(count) + "#".repeat(index + 1)
    })
}

console.log(staircase(4))



// console.log((" ".repeat(copy)+ "#".repeat(count)))
// return (" ".repeat(copy)+ "#".repeat(count))
