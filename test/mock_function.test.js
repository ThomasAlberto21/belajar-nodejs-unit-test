import { calculate, calculateAndReturn } from '../src/sum';

// Mock Function Property
test('Test Calculate', () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10, 10], callback);

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
});

// Mock Function Return Value
test('Test mock return value', () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);

  expect(calculateAndReturn([10, 10], callback)).toBe(40);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
});

// Mock Implementation
test('Test mock implementation', () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => total * 2);

  expect(calculateAndReturn([10, 10 , 10], callback)).toBe(60);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(100);
});
