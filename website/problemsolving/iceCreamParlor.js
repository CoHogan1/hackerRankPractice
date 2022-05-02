function icecreamParlor(m, arr){
    for (let i = 0; i < arr.length; i++) {
        for (let z = 1; z < arr.length; z++){
            if (i === z){ continue }
            if (arr[i] + arr[z] === m){ return [i,z].map(x => x+1) }
        }
    }
}

console.log(icecreamParlor(6, [1,3,4,5,6])) // 1,4
console.log(icecreamParlor(4, [1,4,5,3,2])) // 1, 4
console.log(icecreamParlor(4, [2,2,4,3]))   // 1, 2
