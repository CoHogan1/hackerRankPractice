

function timeInWords(h,m){
    let hours = ['zero','one', 'two','three','four','five','six','seven','eight','nine','ten','eleven','twelve',
        'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','ninteen','twenty','twenty one','twenty two',
        'twenty three','twenty four', 'twenty five','twenty six','twenty seven','twenty eight','twenty nine',
        'thirty','fourty','fifty']

    let hour = hours[h]
    if (m === 0) { return `${hour} o' clock`}
    if (m.toString().length === 1) { return `${hours[m]} minute past ${hour}`}
    if (m === 10){ return `ten minutes past ${hour}`}
    if (m === 15){ return `quarter past ${hour}` }
    if (m === 30){ return `half past ${hour}` }
    if (m === 40){ return `twenty minutes to ${hours[h]}`}
    if (m === 45){ return `quarter to ${hours[h]}` }
    if ( m > 45){
        let rem = 60 - m
        return `${hours[rem]} minutes to ${hours[h]}`
    }
    // all other occasions
    if (m < 30 && m < 10){
        return `${hours[m]} mintue past ${hours[h]}`
    } else if (m < 30 && m > 10) {
        return `${hours[m]} minutes past ${hours[h]}`
    }

    if (m === 59){
        return `${hours[60 - m]} mintue to ${hours[h +1]}`
    } else {
        return `${hours[60 - m]} minutes to ${hours[h + 1]}`
    }

    return `how did you get here? ${h},${m}`
}

console.log(timeInWords(6,1))
console.log(timeInWords(6,0))
console.log(timeInWords(6,10))
console.log(timeInWords(6,15))
console.log(timeInWords(6,30))
console.log(timeInWords(6,40))
console.log(timeInWords(6,45))
console.log(timeInWords(6,47))
console.log(timeInWords(5,47))
console.log(timeInWords(7,29))
console.log(timeInWords(6,35))
