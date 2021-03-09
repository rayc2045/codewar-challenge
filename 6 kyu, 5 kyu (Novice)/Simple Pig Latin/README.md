# Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !

### Solution

```js
function pigIt(str) {
  return str
    .split(' ')
    .map(word =>
      word.match(/[a-z]/i)
        ? word.slice(1) + word[0] + 'ay'
        : word
    )
    .join(' ');
}
```

### Alternates

```js
function pigIt(str) {
  return str.replace(/[a-zA-Z]+/g, function (match) {
    return match.substring(1) + match[0] + 'ay';
  });
}
```

```js
function pigIt(str) {
  return str.replace(/\b(\w)(\w*)\b/gi, '$2$1ay');
}
```
