function gridChallange(arr){
    let copy = []
    // test for alpha sort
    // make a copy of origional array
    arr.map( x => copy.push(x.split('').sort().join('')) )







    return copy
}

console.log(gridChallange(['abc','ade','efg']))
