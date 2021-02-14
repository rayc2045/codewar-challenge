# Integers: Recreation One

Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

Examples:

    listSquared(1, 250) // [[1, 1], [42, 2500], [246, 84100]])
    listSquared(42, 250) // [[42, 2500], [246, 84100]])
    listSquared(250, 500) // [[287, 84100]])

**Solution**

```js
// 給兩個隨機數字，輸出兩數間因數的平方加總開根號為整數的數值
function listSquared(m, n) {
  const result = [];

  for (let i = m; i <= n; i++) {
    const divisors = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisors.push(j);
    }
    const squares = divisors.map(x => x * x);
    const sumOfSquares = squares.reduce((a, b) => a + b);
    if (Number.isInteger(Math.sqrt(sumOfSquares))) result.push([i, sumOfSquares]);
  }
  return result;
}
```

**Alternates**

```js
const listSquared = (m, n) => {
  const res = [];
  for (let i = m; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= n; j++) {
      if (!(i % j)) sum += j ** 2;
    }
    if (Number.isInteger(sum ** .5)) res.push([i, sum]);
  }
  return res;
};
```