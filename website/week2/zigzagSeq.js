// Given an array of n distinct integers, transform the array into a zig zag
// sequence by permuting the array elements. A sequence will be called a zig zag
// sequence if the first  elements in the sequence are in increasing order and
// the last  elements are in decreasing order, where . You need to find the
// lexicographically smallest zig zag sequence of the given array.
//
// Example.
// ar = [2,3,5,1,4]

// return [1,4,5,3,2]
//
// Now if we permute the array as , the result is a zig zag sequence.

let arr = [1,4,3,5,2]

let test = [9,7,8,6,3,5,6,7,3,5,9,8,7]

function findZigZagSeq(a, n){
    n = a.length
    a.sort((a,b)=>{return a - b})
    let mid = ( n + 1 ) / 2
    console.log(mid);
    a[mid], a[n-1] = a[n-1], a[mid]
    console.log(a);



}

findZigZagSeq(arr)
//findZigZagSeq(test)
