

function dayOfProgrammer(year) {
    if (year >1699 && year < 1918) { // julian leap % 4 ==0
        let leap = year % 4
        return leap ? `12.09.${year}` : `13.09.${year}`
    }
    if (year > 1918) { // greg year % 4 === 0 && year % 100 != 0
        let leap = year % 4 && year % 100 != 0
        return leap ? `13.09.${year}` : `12.09.${year}`
    }
}

console.log(dayOfProgrammer(2017)) // 13
console.log(dayOfProgrammer(1800)) // 12
console.log(dayOfProgrammer(2300)) // 13


// if (year == 1918)
//      return "26.09.1918";
//  else if (((year <= 1917) && (year%4 == 0)) || ((year%400 == 0) || ((year%4 ==0) & (year%100 != 0))))
//      return "12.09." + year;
//  else
//      return "13.09." + year;
