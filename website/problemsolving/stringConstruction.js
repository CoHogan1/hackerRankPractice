function stringConstruction(s){
    // oof
    return new Set(s).size
}

console.log(stringConstruction('abcd'))
console.log(stringConstruction('bccb'))
