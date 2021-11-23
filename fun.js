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
let srt2 = `There's-is-a-starman-waiting-in-the-sky`
let t = 2

function caesarCipher(s, k) {
    let capsIndex = []
    let answer = []
    s.split('').map((item, index)=>{
        if (item === item.toUpperCase() && item !== '-'){
            capsIndex.push(index)
        }
        let ans = alp.indexOf(item.toLowerCase())
        if (ans === -1){
            answer.push('-')
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




const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());


//console.log(String.fromCharCode(65), " here");
