# Human readable duration format

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

    formatDuration(62)   // returns "1 minute and 2 seconds"
    formatDuration(3662) // returns "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules:
- The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
- The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
- A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
- Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
- A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
- A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

Sample Tests:

    formatDuration(1) // "1 second"
    formatDuration(62) // "1 minute and 2 seconds"
    formatDuration(120) // "2 minutes"
    formatDuration(3600) // "1 hour"
    formatDuration(3662) // "1 hour, 1 minute and 2 seconds"

### Solution

```js
function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  const year = ~~(seconds / 365 / 24 / 60 / 60);
  const day = ~~(seconds / 24 / 60 / 60) % 365;
  const hour = ~~(seconds / 60 / 60) % 24;
  const minute = ~~(seconds / 60) % 60;
  const second = seconds % 60;
  let values = [year, day, hour, minute, second];
  const units = ['year', 'day', 'hour', 'minute', 'second'];

  let formattedArr = values
    .map((val, idx) => val > 0 ? (val += ` ${units[idx]}${val > 1 ? 's' : ''}`) : (val = 0))
    .filter((val) => val !== 0)

  for (let i = 0; i < formattedArr.length; i++) {
    if (i === (formattedArr.length - 1)) {
      // do nothing
    } else if (i === (formattedArr.length - 2)) {
      formattedArr[i] += ' and ';
    } else {
      formattedArr[i] += ', ';
    }
  }
  return formattedArr.join('');
}
```

### Alternates

```js
const formatDuration = (s) => s === 0 ? 'now' :
  [
    Math.floor(s / 60 / 60 / 24 / 365),
    Math.floor(s / 60 / 60 / 24) % 365,
    Math.floor(s / 60 / 60) % 24,
    Math.floor(s / 60) % 60,
    s % 60,
  ]
    .map((e, i) => e + ' ' + ['year', 'day', 'hour', 'minute', 'second'][i] + (+e > 1 ? 's' : ''))
    .filter((e) => !/^0/.test(e))
    .join(', ')
    .replace(/,\s(?=[\d\s\w]*$)/, ' and ');
```