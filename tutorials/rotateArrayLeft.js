// a left rotation operation on an arrays elements 1 unit to the left.

// ex if 2 unit left op on this arr [1,2,3,4,5] would be [3,4,5,1,2]


function rotateLeft(arr, rotations){
    // hopefully this saves time
    if (rotations === 0){
        console.log(arr)
        return arr
    }
    if (rotations % 5 === 0){
        console.log(arr)
        return arr
    }

    let rotatedArray = arr.concat()

    for (let i = 0; i < rotations; i++) {
        let frontItem = rotatedArray.shift()
        rotatedArray.push(frontItem)
        console.log(rotatedArray, i +" iteration");
    }

    console.log(rotatedArray, "final left");
    return rotatedArray
}

rotateLeft([1,2,3,4,5], 8)


function rotateRight(arr, rotations){
    if (rotations === 0){
        console.log(arr)
        return arr
    }
    if (rotations % 5 === 0){
        console.log(arr)
        return arr
    }
    let rotatedArray = arr.concat()

    for (let i = 0; i < rotations; i++) {
        let lastItem = rotatedArray.pop()
        rotatedArray.unshift(lastItem)
        console.log(rotatedArray, i + " iteration");
    }

    console.log(rotatedArray, "final Right");
    return rotatedArray

}

rotateRight([1,2,3,4,5], 3)
