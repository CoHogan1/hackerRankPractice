// BigInt is a data type to fix js number limitations. js num limit is 2^53
function taumBday(b,w,bc,wc,z){
    const [bigInt, small, str] = [BigInt, Math.min, String]
    return str(bigInt(b) * bigInt(small(bc, wc + z)) + bigInt(w) * bigInt(small(wc, bc +z)))
    // breakdown
    // return String(BigInt(b) * BigIng(Math.min(bc, wc +z))) +
    //        String(BigInt(w) * BigIng(Math.min(wc, bc +z)))
}


console.log(taumBday(3,5,3,4,1),29)
console.log(taumBday(10,10,1,1,1),20)
console.log(taumBday(5,9,2,3,4), 37)
console.log(taumBday(742407782,90529439,847666641,8651519,821801924))


//origional code
function taumBday2(b,w,bc,wc,z){
    let gift = [0,0]
    if (wc >= bc + z){
        gift[0] = (bc + z) * w
    } else if (wc < b+z){
        gift[0] = wc * w
    } else {
        console.log("wtf")
    }
    if (bc > wc + z){
        gift[1] = (wc + z) * b
    } else if( bc < wc + z) {
        gift[1] = bc * b
    } else {
        console.log("wtf")
    }
    return gift.reduce((a,b) => a + b)
}

console.log(taumBday2(3,5,3,4,1), "old ans")
