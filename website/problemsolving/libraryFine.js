
function libraryFine(d1,m1,y1,d2,m2,y2){
    if (y1 > y2){
        return 10000
    } else if (y1 === y2 && m1 > m2){
        return 500 * (m1- m2)
    } else if( y1 === y2 && d1 >d2){
        return 15 * (d1-d2)
    } else {
        return 0
    }
}

console.log(libraryFine(14,7,2018,5,7,2018), 135)
console.log(libraryFine(9,6,2015,6,6,2015), 45)
console.log(libraryFine(2,7,1014,1,1,1014), 3000);
