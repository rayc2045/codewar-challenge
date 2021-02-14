# Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

Sample Tests:

    countBits(0) // 0
    countBits(4) // 1
    countBits(7) // 3
    countBits(9) // 2
    countBits(10) // 2

### Solution

```js
function countBits(n) {
  const binaryStr = n.toString(2);
  let counts = 0;
  binaryStr.split('').forEach((item) => (counts += Number(item)));
  return counts;
}
```

### Alternates

```js
const countBits = (n) => n.toString(2).replace(/0/g, '').length;
```

```js
const countBits = (n) => n.toString(2).split('0').join('').length;
```

```js
const countBits = function (n) {
  return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
};
```