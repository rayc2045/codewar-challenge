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

console.log(dblLinear(20));