// n = num of chapters
// each page can hold up to k promlems.
// only last page can contain < k promlems.
function workBook(n,k,arr){
    //let totalProblems = arr.reduce((a,b) => a + b)
    let ans = []

    arr.forEach((p,i)=>{
        let page = Math.ceil(p / k)
        ans.push(page)

    })
    let count = 1

    // [2,1,2,1,4]

    ans.forEach((d,i)=>{


    })






    return 'IDK'
}
console.log(workBook(5,3,[4,2,6,1,10]), 4)
// [ page, problems]

// c1, page 1, 3 problems, 1,2,3  **
// c1, page 2, 1 promlems, 4

// c2, page 3, 2 problems, 1,2

// c3, page 4, 3 problems, 1,2,3
// c3, page 5, 3 problems, 4,5,6, **

// c4, page 6, 1 problems, 1

// c5, page 7, 3 problems, 1,2,3
// c5, page 8, 3 problems, 4,5,6
// c5, page 9, 3 problems, 7,8,9  **
// c5, page10, 1 problems, 10     **
