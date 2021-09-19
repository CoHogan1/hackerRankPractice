// { 0: 1}  /0
// { 2: 3}  /1
// { 4: 5}  /2
// { 6: 7}  /3
// { 8: 9}  /4
// {10:11}  /5    == page even return even * 2
// {12:13}  /6    == page odd return (odd * 2) - 1
// {14:15}  /7

// n number of pages in book
// p page number to turn to

// return the min number of pages to return
let pa = 16
let nu = 7

function pageTurner(n, p){
    // if (n % 2 === 0){
    //     console.log((n * 2) - 2)
    // } else {
    //     console.log((n + 1) / 2)
    // }
    let frontFlip = Math.floor(p/2);
    let backFlip = Math.floor((n/2)-frontFlip);

    let result = Math.min(frontFlip, backFlip);
    console.log(result);
    return result;
}

pageTurner(2, 6)
