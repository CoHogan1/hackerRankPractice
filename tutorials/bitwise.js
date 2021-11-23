// & operator and
// console.log(0 & 0); // 0
// console.log(0 & 1); // 0
// console.log(1 & 1); // 1


// | operator or
// console.log(0 | 0); // 0
// console.log(0 | 1); // 1
// console.log(1 | 1); // 1


// ^ xor -6
// console.log(0 ^ 0); // 0
// console.log(0 ^ 1); // 1
// console.log(1 ^ 1); // 0


// convert numbers to binary

console.log((4).toString(2));

// convert binary to numbers
console.log(parseInt('100', 2));

// 0b- means binary 10010101010
console.log((0b10010101010));

// 2 is bitwise // 8 is octal // 10 is deciman // and 16 is hexadecimal
console.log((0b10010101010).toString(8));


// shift left and shift right <<   >>
// 9 = 1001

console.log(9 << 2); // === 9 + 00 = 1001+00
console.log(9 >> 2); // 2 === 1001 - two decimal spaces = 10 = 2
console.log("%cHere", "color:green");
