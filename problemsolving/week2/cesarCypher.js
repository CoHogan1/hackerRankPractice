//  Julius Caesar protected his confidential information by encrypting it using a
//  cipher. Caesar's cipher shifts each letter by a number of letters. If the
//  shift takes you past the end of the alphabet, just rotate back to the front
//  of the alphabet. In the case of a rotation by 3, w, x, y and z would map
//  to z, a, b and c.
// s = string to decypher
// k number of shifts

// -1 for both special characters, and capitol letters.

// shift and push

let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let test = `There's-is-a-starman-waiting-in-the-sky`

let sample = 'middle-Outz'

function cesarCypher(s, k){
    function isUpper(str){
        return !/[a-z]/.test(str) && /[A-Z]/.test(str)
    }

    let answer = []
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let sample = s.split('')
    let upperCaseIndex

    sample.forEach((elem, index) =>{
        if (isUpper(elem)){
            upperCaseIndex = index
        }
        let converted = alpha.indexOf(elem.toLowerCase())
        if ((converted + k) > 24 ) {
            converted = converted - 25
            answer.push(alpha[converted + k -1])
        } else if ( converted === -1 ) {
            answer.push('-')
        } else {
            answer.push(alpha[converted + k])
        }
    })
    answer[upperCaseIndex] = answer[upperCaseIndex].toUpperCase()
    console.log(answer.join(''))
    return answer.join('')
}

cesarCypher(sample, 2)
cesarCypher(test, 3)
