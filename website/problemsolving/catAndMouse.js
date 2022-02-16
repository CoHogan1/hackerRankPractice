

// x = catA y = catB z = mouseC
function catAndMouse(x, y, z) {
    let test = [Math.abs(y-z), Math.abs(x-z)]
    // compare distance from mouse. closest cat wins.
    if (test[0] === test[1]){
        return "Mouse C"

    } else if (test[0] > test[1]){
        return "Cat A"

    } else {
        return "Cat B"
    }
}

console.log(catAndMouse(2,5,4), "Cat B")
console.log(catAndMouse(1,2,3), "Cat B")
console.log(catAndMouse(3,2,1), "Mouse C")
