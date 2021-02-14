# RGB To Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

    rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3
    rgb(0, 0, 0) // returns '000000'
    rgb(0, 0, -20) // returns '000000'
    rgb(300,255,255) // returns 'FFFFFF'
    rgb(173,255,47) // returns 'ADFF2F'

### Solution

```js
function rgb(r, g, b) {
  const convertToHex = (val) => {
    if (val <= 0) return '00';
    if (val >= 255) return 'FF';

    return val > 15
      ? val.toString(16).toUpperCase()
      : '0' + val.toString(16).toUpperCase();
  };
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
}
```

### Alternates

```js
function rgb(r, g, b) {
  const c = (n) =>
    ('0' + Math.max(0, Math.min(255, n)).toString(16).toUpperCase()).slice(-2);
  return c(r) + c(g) + c(b);
}
```

```js
function rgb(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join('')
    .toUpperCase();
}
```

```js
function rgb(r, g, b) {
  return [r, g, b]
    .map((x) => {
      if (x > 255) return 'FF';
      else if (x < 1) return '00';
      else return x.toString(16).toUpperCase();
    })
    .join('');
}
```