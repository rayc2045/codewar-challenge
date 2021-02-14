# Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 

**Solution**

```js
function duplicateEncode(word) {
  const count = {};
  const letters = word.toLowerCase().split('');

  letters.forEach((letter) => {
    count[letter] = (count[letter] || 0) + 1;
  });

  return letters
    .map(letter => count[letter] === 1 ? '(' : ')')
    .join('');
}
```

**Alternates**

```js
function duplicateEncode(word) {
  var unique = '';
  word = word.toLowerCase();

  for (var i = 0; i < word.length; i++) {
    word.lastIndexOf(word[i]) == word.indexOf(word[i])
      ? (unique += '(')
      : (unique += ')');
  }
  return unique;
}
```

```js
const duplicateEncode = s => s
  .toLowerCase()
  .split('')
  .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
  .join('');
```