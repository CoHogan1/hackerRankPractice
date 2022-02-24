// There will be two arrays of integers. Determine all integers that satisfy the
// following two conditions:
//
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how
// many such numbers exist.
//
// Example
//
//
// There are two numbers between the arrays:  and .
// , ,  and  for the first value.
// ,  and ,  for the second value. Return .





function getTotalX(a, b) {
    let validCount = 0;

    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                validCount++;
            }
        }
    }

    return validCount;

}


console.log(getTotalX([2,6],[24,36]))
