function dirReduc(arr) {
  let dirs = [];

  arr
    .join()
    .replace(/NORTH,SOUTH/g, '')
    .replace(/SOUTH,NORTH/g, '')
    .replace(/EAST,WEST/g, '')
    .replace(/WEST,EAST/g, '')
    .split(',')
    .forEach((item) => {
      if (item.length) dirs.push(item);
    });

  if (
    dirs.join(',').includes('NORTH,SOUTH') ||
    dirs.join(',').includes('SOUTH,NORTH') ||
    dirs.join(',').includes('EAST,WEST') ||
    dirs.join(',').includes('WEST,EAST')
  )
    return dirReduc(dirs);

  return dirs;
}

// console.log(
//   dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
// );
// // ["WEST"]

// console.log(dirReduc(
//   ["NORTH", "WEST", "SOUTH", "EAST"]
// ))
// // ["NORTH", "WEST", "SOUTH", "EAST"]

// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']));
// // []

console.log(
  dirReduc(['WEST', 'EAST', 'SOUTH', 'NORTH', 'WEST', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'NORTH'])
);