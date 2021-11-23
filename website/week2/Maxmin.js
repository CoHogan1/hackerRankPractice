// you will be given a array of integers, and a second integer.
//[arr]   // k

// you mush create an array of length === k of the unfairness.
// unfairness is calculated by

// max(arr) - min(arr)


// k is a lenght, of any number. Maybe 0.

// arr is a list of numbers to preform data on.

// min = arr.sort() => arr[0]
// max = arr.sort().reverse() => arr[0] || arr[length -1]
// Testing for all pairs, the solution  provides the minimum unfairness.

let int = 2

let nums = [1,4,7,2]


let two = 10

let sec = [4,1,2,3,4,1,20,30,40,100,200]

function maxMin(k, arr) {
    let copy = arr.sort()

    let i, length = copy.length, min = Number.MAX_VALUE

    for (let i = 0; i < length - k + 1; i++) {
        let diff = copy[i + k -1] - copy[i]
        if (diff < min){
            min = diff
        }
    }

    console.log(min)
    return min
}



maxMin(int,nums)
maxMin(two,sec)
