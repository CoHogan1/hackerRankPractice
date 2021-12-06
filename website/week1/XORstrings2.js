// given two int strings, find the XOR of them both.
// input   10101
//         00101

// result  10000

let test  = '10101'
let test2 = '00101'
let res   =  10000

function string_xor(one, two){
    let answer = ''
    for (let i = 0; i < one.length; i++) {
        if (one[i] === two[i]){
            answer += '0'
        } else {
            answer += '1'
        }
    }
    console.log(answer)
    return answer
}

string_xor(test,test2)
