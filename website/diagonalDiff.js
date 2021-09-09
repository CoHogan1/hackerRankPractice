// Given a square matrix, calculate the absolute difference between
// the sums of its diagonals.
// ex 1 2 3
//    4 5 6
//    9 8 9


let testArr = [[11,2,  4],
               [4, 5,  6],
               [10,8,-12]]

let test2 =[[ -1,  1, -7, -8],
            [-10, -8, -5, -2],
            [  0,  9,  7, -1],
            [  4,  4, -2,  1]]

function diagonalDifference(arr){
    // find the sum of numbers in a diagonals
    let leftToRightSum = 0
    let rightToLeftSum = 0
    let max = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        leftToRightSum += arr[i][i]
        rightToLeftSum += arr[max - i][i]
    }

    const diff = leftToRightSum - rightToLeftSum

    console.log(Math.abs(diff))
    return Math.abs(diff)
}

diagonalDifference(test2)
