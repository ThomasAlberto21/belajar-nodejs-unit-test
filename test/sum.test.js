import { sum, sumAll } from '../src/sum.js';

test('Test Sum Function', () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

test('Test Sum All', () => {
  const result = [1, 2, 3, 4, 5];
  expect(sumAll(result)).toBe(15);
});
