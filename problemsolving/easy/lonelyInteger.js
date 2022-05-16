function lonelyInt(a){

    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) === a.lastIndexOf(a[i])){
            return a[i]
        }
    }
}
//console.log(lonelyInt([1,2,3,4,3,2,1]))

const second = (a) => {


    return a.reduce((a,b) => a ^ b)
}


console.log(second([1,2,3,4,3,2,1]))
