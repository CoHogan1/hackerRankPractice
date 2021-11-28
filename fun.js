let car = [-4, 3, -9, 0, 4, 1]

// plus plusMinus

function plusMinus(arr) {
    let pos = 0
    let neg = 0
    let zero = 0

    arr.forEach((item, index)=>{
        if (item === 0){
            zero += 1
        }
        if (item > 0){
            pos +=1
        }
        if (item < 0){
            neg += 1
        }
    })
    console.log((pos  / arr.length).toFixed(6))
    console.log((neg  / arr.length).toFixed(6))
    console.log((zero / arr.length).toFixed(6))
}



//plusMinus(car)

let bar = [1,5,3,4,2] // length = 5

// mini max miniMaxSum

function miniMaxSum(arr) {
    let sort = arr.sort()
    let sum = arr.reduce((a,b) => { return a + b})
    console.log(sum - sort[sort.length -1])
    console.log(sum - sort[0])
}

//miniMaxSum(bar)



// time conversion
//          012345678_
let time =  '12:45:54PM'

let test1 = '12:05:39AM'

let test2 = '12:40:22AM'


function timeConversion(s) {
    if (s[8] === "P") {
        let start = parseInt(s.slice(0,3)) + 12
        if (start >= 24){
            start = '12'
            console.log(start + s.slice(2, 8));
            return start + s.slice(2, 8)
        }
        console.log(start.toString() + s.slice(2,8))
        return start.toString() + s.slice(2,8)
    }
    if (s[8] === "A") {
        if (s[0] === '1' && s[1] === '2'){
            let start = "00"
            let end = s.slice(2,8)
            console.log(start + end)
            return start + end
        } else {
            console.log(s.slice(0, 8));
            return s.slice(0, 8)
        }
    }
}


// timeConversion(test1)
// timeConversion(test2)
// timeConversion(time)


let sam = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80]

function countingSort(arr){
    let memo = []
    arr.forEach((item, index)=>{
        memo[index] = 0
    })
    //console.log(memo)
    arr.forEach((item, index)=>{
        memo[item]++
    })
    //console.log(memo.slice(0,100), "here")
    return memo.slice(0, 100)
}

//countingSort(sam)



let alp = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z']

let str = "middle-Outz" // "okffng-Qwvb"
let str2 = `There's-is-a-starman-waiting-in-the-sky`
let newString = "Hello_World!"
let t = 2
let ggg = 'www.abc.xy'

function caesarCipher(s, k) {
    let specialChars = /\W|_/g
    let capsIndex = []
    let answer = []
    s.split('').map((item, index)=>{
        if (item === item.toUpperCase() && item !== specialChars){ // changed this also.
            capsIndex.push(index)
        }
        let ans = alp.indexOf(item.toLowerCase())
        if (ans === -1){
            answer.push(item)// changed this
        } else {
            answer.push(alp[ans + k])
        }
    })

    capsIndex.forEach((item, index)=>{
        answer[item] = answer[item].toUpperCase()
    })

    console.log(answer.join(''))
}

//caesarCipher(str, 2)
//caesarCipher(ggg, 9)




//const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());


//console.log(String.fromCharCode(65), " here");
//console.log(String.fromCharCode("a"), " this")



let ch = 'A';
let index = 0;

let i = ch.charCodeAt(index);
//console.log(i);


const func = (s, k) => {
    let result = ''

    s.split('').forEach((item, index)=>{
        let charCode = item.charCodeAt(0)

        if (charCode > 96 && charCode < 123){
            // check for lowercase letters
            charCode += k % 26
            if (charCode > 122) {
               charCode = (charCode - 122) + 96;
            } else if (charCode < 97) {
                charCode = (charCode - 97) + 123;
            }
        }

        if (charCode > 64 && charCode <= 90){
            // check for uppercase letters
            charCode += k % 26
            if (charCode > 90) {
                charCode = (charCode - 90) + 64;
            } else if (charCode < 65) {
                charCode = (charCode - 65) + 91;
            }
        }
        result += String.fromCharCode(charCode)
    })
    return result
}

//65 to 90 is alphabet
//97 to 122 lowercase

func(str2, 3)




// s = string to encrypt, k = shift value
// s = 'SERR PBQR PNZC' and k = 13 will produce 'FREE CODE CAMP'
// const caesarCipher = function(s, k) {
//   let result = '';
//
//   for (let i = 0; i < s.length; i++) {
//
//     let charCode = s[i].charCodeAt();
//     // check that charCode is a lowercase letter; automatically ignores non-letters
//     if (charCode > 96 && charCode < 123) {
//
//       charCode += k % 26 // makes it work with numbers greater than 26 to maintain correct shift
//       // if shift passes 'z', resets to 'a' to maintain looping shift
//       if (charCode > 122) {
//         charCode = (charCode - 122) + 96;
//       // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
//       } else if (charCode < 97) {
//         charCode = (charCode - 97) + 123;
//       }
//     }
//
//     if (charCode > 64 && charCode < 91) {
//
//       charCode += k % 26
//
//       if (charCode > 90) {
//         charCode = (charCode - 90) + 64;
//       } else if (charCode < 65) {
//         charCode = (charCode - 65) + 91;
//       }
//     }
//
//     result += String.fromCharCode(charCode);
//   }
//   return result
// }


// let abc = "123456789"
// let mid = Math.ceil(abc.length / 2)
// console.log(abc.slice(0, mid))
//
// let x = abc.slice(mid)
//
// let y = x.split('').reduce((a,b)=>{return [b,...a]})
// console.log(y.join(''));




function isBalanced(s) {

    // let mid = Math.ceil(s.length / 2)
    // let secHalf = s.slice(mid)
    // let reversed = secHalf.split('').reduce((a,b)=> {return [b,...a]})
    //
    // if (s.slice(0,mid) === reversed.join('')){
    //     console.log("YES")
    //     return "YES"
    // } else {
    //     console.log("NO")
    //     return "NO"
    // }
}


isBalanced("{{()}}")        // yes
isBalanced("{[(])}")        // no
isBalanced("{{[[(())]]}}")  // yes
isBalanced("ABCCBA")


// let map = {"{":"}", "[":"]", "(":")"}
//
//
// let isValid = function(s) {
// let stack = [];
//
//   for (let i = 0; i < s.length; i++) {
//       let item = s[i]
//       if (map[item]) {
//         stack.push(map[item]);
//       } else {
//       if (item !== stack.pop()) {
//         console.log("false");
//         return false;
//       }
//     }
//   }
//   console.log(stack.length === 0);
//   return stack.length === 0;
// };


//  { { ( ) } }
//  1 2 3 4 5 6
//  1 2 3 3 2 1
//
//  { [ ( ] ) }
//
//  { { [ [ ( ( ) ) ] ] } }
