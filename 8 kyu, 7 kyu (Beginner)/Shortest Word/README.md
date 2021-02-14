#  Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

Sample Tests:

    findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    findShort("turns out random test cases are easier than writing out basic ones"), 3);

**Solution**

```js
function findShort(s){
  return s.split(' ').map(word => word.length).sort((a, b) => a - b)[0];
}
```

**Alternates**

```js
function findShort(s){
  return s.split(' ').map(a => a.length).reduce((a, b) => Math.min(a, b));
}
```

```js
function findShort(s){
  return Math.min(...s.split(' ').map(s => s.length));
}
```