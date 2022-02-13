//n pages long, turn to page p

function pageCount(n, p) {
    return Math.floor(n / 2)

}


console.log(pageCount(3, 5))
console.log(pageCount(5, 4))
console.log(pageCount(6, 2), 1) //1


//
// def pageCount(n, p):
//     if n == 2:
//         return 0
//     if n % 2 == 0 and n-p == 1:
//         return 1
//     else:
//         return int(min(p/2,(n-p)/2))
