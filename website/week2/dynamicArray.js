// n = number of empty arrays to initalize.
// queries = contains 3 space seperated ints.

let test = 4

let ques = [1, 2, 3]

function dynamicArray(n, queries){
    let lastAnswer = 0
    let twoDim = []

    for (let i = 0; i < n; i++) {
        let x = new Array()
        twoDim.push(x)
    }

    // queries.forEach((item, index)=>{
    //
    // })



    console.log(twoDim)
}

dynamicArray(test, ques)
