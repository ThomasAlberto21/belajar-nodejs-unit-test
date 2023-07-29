import { sayHello } from '../src/sayHello.js';

test('sayHello Success', () => {
  expect(sayHello('Thomas')).toBe('Hello Thomas!');
});
test.failing('sayHello Fail', () => {
  sayHello(null);
});
