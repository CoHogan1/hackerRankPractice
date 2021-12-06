

let arr = [1,2,3,4,5]

function sum(arr) {
    let array = arr.concat()
    let min = 0
    let max = 0

    array.sort((a, b)=> {return a - b})

    array.forEach((item, index)=>{

        if(index !== array.length - 1){
            min = min + item
        }
        if (index !== 0){
            max+= item
        }
    })

    console.log(`${min}  ${max}`)

    return `${min}  ${max}`
}


sum(arr)
