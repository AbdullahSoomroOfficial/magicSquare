function initializeMatrix(number) {
  const matrix = [];
  for (let i = 0; i < number; i++) {
    const row = [];
    for (let j = 0; j < number; j++) {
      row.push(null);
    }
    matrix.push(row);
  }
  return matrix;
}

function calcuateNextPoint(currentPoint) {
  let row = currentPoint[0];
  let column = currentPoint[1];
  if (column > input - 1) {
  }
}

const input = 3;
const startingPoint = [0, Math.floor(input / 2)];
const pointer = [...startingPoint];
const grid = initializeMatrix(input);
const number = 1;

//number placed at starting point
grid[startingPoint[0]][startingPoint[1]] = number;

calcuateNextPoint(pointer);

console.table(grid);
