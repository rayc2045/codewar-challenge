# Is Beautiful String?

A string is said to be beautiful if "b" occurs in it no more times than "a"; "c" occurs in it no more times than "b"; etc.

Given a string s, check whether it is beautiful.

Examples:

```
For s = "bbbaacdafe", the output should be true.

a   b   c   d   e   f   g ...  z
|   |   |   |   |   |   |      |
3 ≥ 3 > 1 ≥ 1 ≥ 1 ≥ 1 > 0 ... ≥0

It's so beautiful ;-)
```

```
For s = "aabbb", the output should be false;

a   b   c   d ... z
|   |   |   |     |
2 < 3 > 0 ≥ 0 ... ≥0

It's not beautiful ;-)
```

```
For s = "bbc", the output should be false.

a   b   c   d ... z
|   |   |   |     |
0 < 2 > 1 > 0 ... ≥0

It's not beautiful ;-)
```

Input/Output:

    [input] string s

    A string of lowercase letters.

    Constraints: 3 ≤ inputString.length ≤ 50.

    [output] a boolean value

Sample Tests:

    isBeautifulString("bbbaacdafe"); // true
    isBeautifulString("aabbb"); // false
    isBeautifulString("bbc"); // false

### Solution

```js
function isBeautifulString(inputString) {
  const engArray = [];

  // Fills array with letters from a to z
  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    engArray.push(String.fromCharCode(i));
  }

  // Create an array fills 26 zeros
  const nums = Array(engArray.length).fill(0);

  // Calculate numbers English letter shows
  for (let letter of inputString) {
    nums[engArray.indexOf(letter)]++;
  }

  // Compare the next one is bigger than previous one
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) return false;
  }

  return true;
}
```

### Alternates

```js
function isBeautifulString(s) {
  let l = Infinity;
  return [...'abcdefghijklmnopqrstuvwxyz'].every(
    c => l >= (l = s.split(c).length)
  );
}
```

```js
function isBeautifulString(inputString) {
  return inputString
    .split('')
    .sort()
    .join('')
    .replace(/([a-z])\1*/g, it => it.length + ',')
    .split(',')
    .slice(0, -1)
    .map(Number)
    .every(
      (el, i, ar) =>
        inputString.indexOf(String.fromCharCode(i + 'a'.charCodeAt(0))) >= 0 &&
        (i == 0 || ar[i] <= ar[i - 1])
    );
}
```
