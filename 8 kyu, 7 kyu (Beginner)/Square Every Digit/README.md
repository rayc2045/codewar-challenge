# Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9's square is 81 and 1's square is 1.

Note: The function accepts an integer and returns an integer

Sample Tests:

    squareDigits(9119) // 811181

**Solution**

```js
function squareDigits(num){
  return +num.toString().split('').map(i => i * i).join('');
}
```