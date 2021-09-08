// Given a square matrix, calculate the absolute difference between
// the sums of its diagonals.
// ex 1 2 3
//    4 5 6
//    9 8 9


let testArr = [[11,2,  4],
               [4, 5,  6],
               [10,8,-12]]

let test2 =[[-1 1 -7 -8],
[-10 -8 -5 -2],
[0 9 7 -1],
[4 4 -2 1]]

function diagonalDifference(arr){
    // find the sum of numbers in a diagonals
    const leftToRightSum = arr[0][0] + arr[1][1] + arr[2][2]
    const rightToLeftSum = arr[2][0] + arr[1][1] + arr[0][2]

    const diff = leftToRightSum - rightToLeftSum

    console.log(Math.abs(diff))
    return Math.abs(diff)
}

diagonalDifference(testArr)
