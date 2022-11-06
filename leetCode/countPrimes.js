var countPrimes = function(n) {
  const numsArr = Array.from({ length: n + 1 }, () => true);
  const primeNumbers = [];
  for (let i = 2; i <= n; i++) {
    if (numsArr[i]) {
      primeNumbers.push(i);
      for (let j = i + i; j <= n; j += i) {
        numsArr[j] = false;
      }
    }
  }
  return primeNumbers.length;
};
