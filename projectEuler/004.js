// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


// 999, 999
let arr = []

function run(n, m){
    let tot = (n * m).toString();
    let rev = tot.split('').reverse().join('');
    if (tot === rev) return [n, m, tot]
    arr.push(tot)
    return run(n -1 , m -1)
}

console.log(run(999, 999));
console.log(arr,);
