// convert 12 hour time to militarty time.

let noon = '12:00:00AM'

let midnight = '12:00:00PM'

let pm = "01:20:10PM"

let am = "01:01:00AM"



function convert(s){

    if (s.includes('AM')){
        let militaryTime = s.slice(0, -2)
        militaryTime.replace('12','00')
        console.log(militaryTime)
        return militaryTime
    }

    if (s.includes('PM')){
        // remove the pm
        let militaryTime = s.slice(0, -2)
        // get the first 2 strings- the hour.
        let hour = (militaryTime.slice(0, 2))
        // add 12 to conver hour to military time.
        let intHour = parseInt(hour) + 12
        console.log(`${intHour}${militaryTime.slice(2, militaryTime.length)}`)
        return `${intHour}${militaryTime.slice(2, militaryTime.length)}`
    }
}


convert(pm)
console.log("pm");
convert(am)
console.log("am");
convert(noon)
console.log("noon");
convert(midnight)
console.log('midnight');
