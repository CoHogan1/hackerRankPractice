// strong password = len at least 6
//contains one digit
// one upper and lower case letter.
// one special letter.

function minimumNumber(n, password){
    // let arr = [/[!@#$%^&*()_+]/,/[0-9]/,/[A-Z]/,/[a-z]/]
    //     .map(c => !c.test(password))
    //     .filter(Boolean).length

    let arr = [/[!@#$%^&*()_+]/,/[0-9]/,/[A-Z]/,/[a-z]/]
        .filter(c => !c.test(password)).length


    return Math.max(arr, 6 - n)
}


console.log(minimumNumber(11, '#HackerRank'))
console.log(minimumNumber(11, 'Ab1'))
console.log(minimumNumber(11, '790'))
