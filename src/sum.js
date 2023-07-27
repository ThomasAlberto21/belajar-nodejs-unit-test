export const sum = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

export const sumAll = (numbers) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }

  return total;
};
