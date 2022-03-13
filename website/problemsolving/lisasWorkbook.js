
function workBook(n,k,arr){
    let count = 0
    let page = 0

    for (let a = 0; a < n; a++) { // n = arr.length
        for (let z = 1; z <= arr[a]; z++){ // number of problems per page
            if (k === 1 || z % k === 1){ // k = number of problems
                page++
            }
            if (z === page){
                count++
            }
        }
    }
    return count
}
console.log(workBook(5,3,[4,2,6,1,10]), 4)
