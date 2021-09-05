// Given an array of integers, where all elements but one occur twice,
// find the unique element.

// ex let arr = [1,1,2,2,3,3,4,5,5,6,6,7,7]
// return 4


let arr = [1,2,3,4,3,2,1]

function lonelyInteger(a){
    let occurs = {}

    a.forEach(item =>{
        // pops object
        occurs[item] = 1
    })

    a.forEach(item =>{
        if (item in Object.keys(occurs)){
            occurs[item] += 1

        }
    })





    console.log(occurs)
}

lonelyInteger(arr)


// if (item in Object.keys(occurs)) {
//     console.log("yup");
//     occurs[item] += 1
// }
