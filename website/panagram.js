// a panagram is a sentence that contains every letter of the alphabet.
// write a function that checks weather the sentence in a panagram or not.

let al = 'abcdefghijklmnopqrstuvwxyz' // true

let test1 = 'We promptly judged antique ivory buckles for the next prize' // true
let test2 = 'We promptly judged antique ivory buckles for the prize' // false
let test3 = '!@#$%^&*()_+{}|":?><~`1234567890-=][\';/,. a]`"'

function panagrams(s){
    // let nums = /[0-9]/g
    // let chars = /[&\/\\#^+()$~%.?`'":*<>{}!@"']/g
    // let t = s.replace(nums, '')
    // let u = t.replace(chars, '')
    // console.log(u);

    let str = s.toLowerCase().split('').sort()// alphabatized array duplicates present.

    let unique = [...new Set(str)]//  copy arry into a set, for no duplicates.

    while (unique[0] !== 'a'){// remove special characters.
        unique.shift()
    }

    let alp = 'abcdefghijklmnopqrstuvwxyz'
    let test = alp.split('')

    //console.log(test, unique);
    if (test.length === unique.length){
        console.log('pangram')
        return 'pangram'

    }
    if (test.length !== unique.length){
        console.log('not pangram')
        return 'not pangram'
    }
}

panagrams(al)    // true
panagrams(test1) // true
panagrams(test2) // false
panagrams(test3) // false
