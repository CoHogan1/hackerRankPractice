
function kangaroo(x1,v1,x2,v2){
    if ((x2 - x1) * (v2 - v1) < 0 && (x2 - x1) % (v2 - v1) === 0) {
        return "YES"
    } else {
        return "NO"
    }
}

console.log(kangaroo(2,1,1,2), "Yes")
console.log(kangaroo(0,2,5,3), "NO")
console.log(kangaroo(14,4,98,2), "yes");
