let test1 = '12:00:01PM'
let test2 = '12:00:01AM'
let test3 = '11:23:01PM'


const convert = (str) => {
    if (str.endsWith("AM")){ // AM
        if (str.startsWith("12")){
            return `00${str.slice(2, str.length - 2)}`
        }
        return str.slice(0, str.length -2)

    } else { // PM
        if (str.slice(0,2) == "12"){
            return str.slice(0, str.length - 2)
        }
        let time = parseInt(str.slice(0,2)) + 12
        return `${time}${str.slice(2, str.length - 2)}`
    }
}

console.log(convert(test1))
console.log(convert(test2))
console.log(convert(test3))


const today = new Date(2016, 7, 7)
// undefined
const tomorrow = new Date(2016, 7, 8)
console.log(today, tomorrow);
// undefined
console.log(tomorrow >= today)
// true
console.log(today <= tomorrow)
// true
console.log(today == tomorrow)
// false
