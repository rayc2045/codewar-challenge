/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Sample Tests:
isIsogram("Dermatoglyphics") // true
isIsogram("isogram") // true
isIsogram("aba") // false
isIsogram("moOse") // false
isIsogram("isIsogram") // false
isIsogram("") // true
*/

function isIsogram(str) {
  if (!str.length) return true;

  str = str.toLowerCase();

  const array = str.split('');
  const sortedArr = array.slice().sort();

  for (let i = 0; i < array.length; i++) {
    if (sortedArr[i + 1] === sortedArr[i]) return false;
  }
  return true;
}

// Alternates

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str);
}

function isIsogram(str){
  return !str || (new Set(str.toUpperCase()).size == str.length);
}