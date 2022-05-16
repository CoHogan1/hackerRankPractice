function marcCakeWalk(arr){
    let copy = arr.sort((a,b) => b - a)
    let total = 0

    for (let i = 0; i < copy.length; i++) {
        let x = Math.pow(2,i) * arr[i]
        total += x
    }
    return total
}

console.log(marcCakeWalk([5,10,7]))
