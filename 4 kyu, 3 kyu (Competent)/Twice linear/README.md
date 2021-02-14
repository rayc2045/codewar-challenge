# Twice linear

Consider a sequence u where u is defined as follows:

1. The number u(0) = 1 is the first one in u.
2. For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
3. There are no other numbers in u.

Example:

    u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

    1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:

Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered sequence u (ordered with < so there are no duplicates) .

Sample Tests:

    dblLinear(10) // 22
    dblLinear(20) // 57
    dblLinear(30) // 91
    dblLinear(50) // 175
    dblLinear(100) // 447

**Solution**

```js
function dblLinear(n) {
  let numbers = [1];
  let [y, z] = [0, 0];

  while (numbers.length <= n) {
    let [a, b] = [numbers[y] * 2 + 1, numbers[z] * 3 + 1];
    if (a > b) {
      numbers.push(b);
      z += 1;
    } else if (a < b) {
      numbers.push(a);
      y += 1;
    } else {
      numbers.push(a);
      [y, z] = [y + 1, z + 1];
    }
  }
  return numbers[n];
}
```

**Alternates**

```js
function dblLinear(n) {
  var u = [1], pt2 = 0, pt3 = 0; //two pointer

  for (var i = 1; i <= n; i++) {
    u[i] = Math.min(2 * u[pt2] + 1, 3 * u[pt3] + 1);
    if (u[i] == 2 * u[pt2] + 1) pt2++;
    if (u[i] == 3 * u[pt3] + 1) pt3++;
  }
  return u[n];
}
```

```js
function dblLinear(n) {
  let x = 1;
  let y = [];
  let z = [];

  for (let i = 0; i < n; i++) {
    y.push(x * 2 + 1);
    z.push(x * 3 + 1);
    
    const min = Math.min(y[0], z[0]);
    if (min === y[0]) x = y.shift();
    if (min === z[0]) x = z.shift();
  }
  return x;
}
```