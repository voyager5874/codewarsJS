snail = function (array) {
  if (!array[0].length) {
    return [];
  }

  let matrixSize = array.length;
  let stepsCount = matrixSize * 2 - 1;
  let result = [];

  let step = 0;
  let shift = 0;

  while (true) {
    for (let i = shift; i < matrixSize - shift; i++) {
      result.push(array[shift][i]);
    }
    step++;

    if (step >= stepsCount) {
      break;
    }

    for (let i = 1 + shift; i < matrixSize - shift; i++) {
      result.push(array[i][matrixSize - 1 - shift]);
    }
    step++;

    if (step >= stepsCount) {
      break;
    }

    for (let i = matrixSize - 2 - shift; i >= shift; i--) {
      result.push(array[matrixSize - 1 - shift][i]);
    }
    step++;

    if (step >= stepsCount) {
      break;
    }

    for (let i = matrixSize - 2 - shift; i > shift; i--) {
      result.push(array[i][0 + shift]);
    }
    step++;

    if (step >= stepsCount) {
      break;
    }

    shift++;
  }
  return result;
};
