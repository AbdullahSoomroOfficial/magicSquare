function generateMagicSquare(order) {
  const input = order;
  const startingPoint = [0, Math.floor(input / 2)];
  const currentPoint = [...startingPoint];
  const numberOfIterations = input * input;

  function initializeEmptyMatrix(number) {
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

  function isNextPointFilled(currentPoint, nextPoint) {
    // if calculated next position is already filled
    if (matrix[nextPoint[0]][nextPoint[1]]) {
      //row
      // moving row position one number higher and
      nextPoint[0] = currentPoint[0] + 1;
      //column
      // reseting column position
      nextPoint[1] = currentPoint[1];
      // which will be the next position for next number in this case
    }
  }

  function calculateNextPoint(currentPoint) {
    const row = currentPoint[0];
    const column = currentPoint[1];
    const nextPoint = [null, null];

    // next row position
    if (row - 1 >= 0) {
      // when moving up, it should not cross the matrix row length (least row position is 0)
      nextPoint[0] = row - 1;
    } else {
      // if it cross the matrix row length
      // moving it to last row position
      nextPoint[0] = input - 1;
    }

    // next column position
    if (column + 1 <= input - 1) {
      // when moving right in column position, it should not cross the matrix column length
      //(max column position is [given matrix order number - 1])
      nextPoint[1] = column + 1;
      isNextPointFilled(currentPoint, nextPoint);
    } else {
      nextPoint[1] = 0;
      isNextPointFilled(currentPoint, nextPoint);
    }

    return nextPoint;
  }

  function plotNumber(row, column, nextNumber) {
    matrix[row][column] = nextNumber;
  }

  const matrix = initializeEmptyMatrix(input);

  //number placed at starting point
  matrix[startingPoint[0]][startingPoint[1]] = 1;

  for (let i = 1; i < numberOfIterations; i++) {
    const nextPoint = calculateNextPoint(currentPoint);
    currentPoint[0] = nextPoint[0];
    currentPoint[1] = nextPoint[1];
    // next row, column position and number
    plotNumber(...currentPoint, i + 1);
  }

  console.table(matrix);
  return matrix;
}

export { generateMagicSquare };
