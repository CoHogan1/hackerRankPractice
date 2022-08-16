// 00 01 02
//    11
// 20 21 22
function hourglassSum(arr) {
    let highestCount = -Infinity

    for (let i = 0; i < arr.length -2; i++){
        for (let z = 0; z < arr.length - 2; z++){
            let top = arr[i][z] + arr[i][z+1] + arr[i][z+2];
            let mid = arr[i+1][z+1];
            let bot = arr[i+2][z] + arr[i+2][z+1] + arr[i+2][z+2];
            let sum = top + mid + bot
            if (sum > highestCount) { highestCount = sum }
        }
    }
    return highestCount
}

const testArr = [
//   0 1 2 3 4 5
    [1,1,1,0,0,0],  // 0
    [0,1,0,0,0,0],  // 1
    [1,1,1,0,0,0],  // 2
    [0,0,0,0,0,0],  // 3
    [0,0,0,0,0,0],  // 4
    [0,0,0,0,0,0]   // 5
]
const testTwo = [
    [-1, -1,  0 ,-9 ,-2 ,-2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
]

console.log(hourglassSum(testTwo),   "-6");
