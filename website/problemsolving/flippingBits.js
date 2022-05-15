function flippingBits(n){
    return (~n >>> 0)
}
console.log(flippingBits(2147483647))

// why this works...
// the '~' called tilde operator is the bitwise "Not" operator.
// ex
// not 1001 =
//     0110
// the tilde/ not operator, flips the bits into the opposite bits. 0 = 1, and 1 = 0
// it uses two compliment a computer science term. google it. 
