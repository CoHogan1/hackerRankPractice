function add(num1, num2) {
  let total = num1 + num2; // 0(1)
  return total; // 0(1)
  // 0(1+1+1+1) = 0(4) => 0(1) simplify it to basic form.
};

// all 0(1)
// Looking up num1`
// Looking up num2
// Assigning the sum of the two numbers to the variable total
// Returning total.

// 0(1)  is constant time complexity.
// operations are not dependant on the size of the data being used.
// Addition, subtraction, assignment, and most forms of basic lookup all
// are considered to run at constant time, so when you see these types of
//  operations, make a quick mental note that they run at O(1).

// Linear Time: O(n)
// linear time complexity, the algo runs at a rate that increases with the
// size of the data.

// Quadratic Time: O(n²)
//Algorithms or operations that have quadratic time are identified as having
 // to perform a linear time operation for each value in an input, not just for
 // the input itself.
