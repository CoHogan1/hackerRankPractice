
// passes 11 out of 12.
function jumpingOnClouds(c, k){
    let e = 100
    for (let i = 0; i < c.length; i = i + k) {
        e--
        if (c[i] != 0){ e = e - 2 }
    }
    return e
}

// console.log(jumpingOnClouds([0,0,1,0], 2),  96)
// console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2), 92)
//console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0], 3), 80);


function jOC(c,k){
    let energy = 100
    let currentCloud = 0

    while(true){
        currentCloud += k
        if (currentCloud >= c.length){
            currentCloud -= c.length
        }
        energy--
        if (c[currentCloud] === 1){ energy -= 2}
        if (currentCloud === 0){
            break
        }
    }
    return energy
}

console.log( jOC([0,0,1,0], 2),  96           )
console.log( jOC([0,0,1,0,0,1,1,0], 2), 92    )
console.log( jOC([1,1,1,0,1,1,0,0,0,0], 3), 80)
