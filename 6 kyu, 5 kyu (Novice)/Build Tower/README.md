# Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

    [
      '  *  ', 
      ' *** ', 
      '*****'
    ]

and a tower of 6 floors looks like below

    [
      '     *     ', 
      '    ***    ', 
      '   *****   ', 
      '  *******  ', 
      ' ********* ', 
      '***********'
    ]

Sample Tests:

    towerBuilder(1); // ["*"]);
    towerBuilder(2); // [" * ","***"]);
    towerBuilder(3); // ["  *  "," *** ","*****"]);

**Solution**

```js
function towerBuilder(nFloors) {
  let towerArr = [];
  for (let i = 1; i <= nFloors; i++) towerArr.push(i * 2 - 1);

  const spaceNum = nFloors * 2 - 1;
  return towerArr.map((item) => {
    let space = '';
    let stars = '';
    for (let i = 0; i < (spaceNum - item) / 2; i++) space += ' ';
    for (let i = 0; i < item; i++) stars += '*';
    return (item = space + stars + space);
  });
}
```

**Alternates**

```js
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      ' '.repeat(nFloors - i - 1) +
      '*'.repeat(i * 2 + 1) +
      ' '.repeat(nFloors - i - 1)
    );
  }
  return tower;
}
```

```js
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
```