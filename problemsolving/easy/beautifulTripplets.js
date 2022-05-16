function beautifulTriplets(d, arr){
    let count = 0

    for(let i = 0; i < arr.length - 2; i++){
        for (let j = 0; j < arr.length -1; j++){
            if (arr[j] - arr[i] > d) { break }
            for (let k = j + 1; k < arr.length; k++){
                console.log(i,j,k);
                if (arr[k] - arr[j] > d){ break }
                if (arr[j] - arr[i] === arr[k] -  arr[j] && arr[k] - arr[j] === d ){
                    count++
                }
            }
        }
    }

    return count
}
console.log(beautifulTriplets(3, [1,2,4,5,7,8,10]))

// 2 3 7 8 9

// you have to use three loops, but how can you shorten it.
// i < j < k
// a[j] - a[i]  =  a[k] - a[j] = d

// i j k     i j k       i j k
// 1,4,7     4,7,10     2,5,8

// let one = k - 1
// lt two = j - i

// 7-4 = 4,   4-1 =3,   3= d
// 10 -7 =     7-4 = 3    3 = d
// 8-5 =   5-2 ==3 ==d

// let one = 7 - 4  4 -1 -3 - d
// let two = 4 -1
// if two === d { count++}
