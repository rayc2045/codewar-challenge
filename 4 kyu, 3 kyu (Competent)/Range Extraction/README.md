# Range Extraction

A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.

The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

    // returns "-6,-3-1,3-5,7-11,14,15,17-20"
    solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);

### Solution

```js
function solution(list) {
  const newList = list.slice();

  for (let i = 0; i < list.length; i++) {
    if (i === 0 || i === list.length - 1) continue;
    if (list[i - 1] === list[i] - 1 && list[i] + 1 === list[i + 1])
      newList[i] = null;
  }
  // replace ones that appear twice consecutively to "-"
  return newList.join().replace(/,{2,}/g, '-');
}
```

### Alternates

```js
function solution(list) {
  for (let i = 0; i < list.length; i++) {
    let j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);
  }
  return list.join();
}
```

```js
const solution = (list) =>
  list.reduce((acc, curr, i) => {
    if (i == 0) return curr.toString();
    if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
    if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1)
      return acc + '-' + curr;
    return acc + ',' + curr;
  });
```