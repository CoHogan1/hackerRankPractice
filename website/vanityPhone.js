// take a list of codes, and see if the numbers in the number array contanes the codes.

let numbers = ['+1234567891', '+9874563737', '+8264382424', '+5674678388']

let codes = [5, 'bob', 'win', 'hello', 6]


// abc = 2
// def = 3
// ghi = 4
// jkl = 5
// mnp = 6
// pqrs = 7
// tuv = 8
// wxyz = 9



function compare(nums, text){
    // convert codes into numbers
    let codesToInt = []
    codes.forEach((item, index)=>{
        if (typeof item === 'number'){
            console.log(item, 'number')
            codesToInt.push(item)
        }
        if (typeof item === 'string'){
            console.log(item, "string");
            let data = item.split('')
            data.map(unit =>{
                console.log(unit)

            })
        }
    })


    console.log(codesToInt)
}


compare(numbers, codes)
