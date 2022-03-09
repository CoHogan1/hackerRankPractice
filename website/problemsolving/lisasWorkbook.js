// n = num of chapters
// each page can hold up to k promlems.
// only last page can contain < k promlems.
function workBook(n,k,arr){
    //let totalProblems = arr.reduce((a,b) => a + b)
    let special = 0
    let page = 0
    let chapters = 1
    let book = []

    for (let i = 0; i < arr.length; i++) {
        let q = 0
        while(q < arr[i]){
            book.push([page, q])
            q++
            if (q >= k){ page++}
            if (q < 0 || q > 11){ break }
        }
    }

    console.log(book);




        // see if arr[i] > 3
        // if so push 3 problems to page 1
        // page++
        //arr[i] - k

        // see if arr[i] > 3
        // repeat step 1

        // if not
        // push remainder to arr
        // page++
        // break
    console.log(calc);

    return 'IDK'
}
console.log(workBook(5,3,[4,2,6,1,10]), 4)


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



// [ 1, 3, 1 ], [ 2, 1, 0 ], [ 3, 2, 0 ], [ 4, 3, 1 ], [ 5, 3, 1 ],
// [ 6, 1, 0 ], [ 7, 3, 1 ], [ 8, 3, 1 ], [ 9, 3, 1 ], [ 10, 1, 0 ]





// for (let i = 0; i < arr.length; i++) {
//     while (arr[i] > 0){
//
//         if (arr[i] - k >= 0){
//             arr[i] -= k
//             test.push([page, k, 1])
//             page++
//
//         } else {
//             test.push([page, arr[i],0])
//             arr[i] = 0
//             page++
//         }
//
//         if (arr[i] < 0 || arr[i] > 11){ break }
//     }
// }
// console.log(test)
