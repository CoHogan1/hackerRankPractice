// { 0: 1}  /1
// { 2: 3}  /2
// { 4: 5}  /3
// { 6: 7}  /4
// { 8: 9}  /5
// {10:11}  /6    == (page + 1) / 2  for odd num
// {12:13}  /7    == (page * 2) - 2  for even num
// {14:15}  /8

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
    return result;
}

pageTurner(2, 6)
