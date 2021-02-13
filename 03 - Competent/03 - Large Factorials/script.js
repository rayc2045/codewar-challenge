/*
In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

  The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

  I have removed the use of require in the javascript language.

Sample Tests:

  factorial(1) // '1'
  factorial(5) // '120'
  factorial(9) // '362880'
  factorial(15) // '1307674368000'
*/

function factorial(n) {
  // 遞歸導致結果以科學計數呈現
  // if (n < 2) return '1';
  // return String(n * factorial(n - 1));

  // 為得到完整結果，需儲存每位數字，最後以字串輸出
  const result = [1];

  for (let i = 2; i <= n; i++) {
    let carry = 0; // 進位

    for (let j = 0; j < result.length || carry !== 0; j++) {
      carry += i * (result[j] || 0);
      result[j] = carry % 10;
      carry = ~~(carry / 10);
    }
  }
  return result.reverse().join('');
}