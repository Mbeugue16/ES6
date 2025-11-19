function dirReduc(arr){
  const opposites = {
    'NORTH': 'SOUTH',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
    'WEST': 'EAST'
  };

  const stack = [];

  for (const dir of arr) {
    if (stack.length && stack[stack.length - 1] === opposites[dir]) {
      stack.pop(); // annule la direction opposée
    } else {
      stack.push(dir);
    }
  }

  return stack;
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// → ["WEST"]

dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
// → ["NORTH", "WEST", "SOUTH", "EAST"]

dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])
// → []
