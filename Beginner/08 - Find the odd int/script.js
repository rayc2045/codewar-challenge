/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Sample Tests:
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); // -1
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]); // 5
findOdd([10]); // 10
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); // 10
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]); // 1
*/

function findOdd(A) {
  let count = 0;
  const arr = A.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count % 2 !== 0) return arr[i];
  }
}

// Alternates

function findOdd(A) {
  var x = 0;
  for (var i = 0; i < A.length; i++) {
    x = x ^ A[i];
  }
  return x;
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

const findOdd = arr => arr.reduce(
  (pv, cv) => arr.filter(inv => inv === cv).length % 2 === 1 ? cv : pv);