
// bill = [fooditem, food item, fooditem]
// the index of the food item amanda doesnt eat.

function bonAppetit(bill, k, b) {
    const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;

    let aFood = bill.filter((value) => value != bill[k])
    let total = aFood.reduce((a,b) => a + b ) / 2

    console.log(annasBill, total);//    ?


    return total === b ? "Bon Appetit" : b - total
}

console.log(bonAppetit([3,10,2,9],1,12))// 24 total
console.log(bonAppetit([1,2,3,4],3,3))


//console.log([1,2,3,4,5].filter((value) => value != 3 ))
//console.log([1,2,3,4,5].reduce((item)=> item != 3))

// function bonAppetit(bill, k, b) {
//     const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
//     annasBill === b ? console.log('Bon Appetit') : console.log(b - annasBill);
//
// }
