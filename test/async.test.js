import { sayHelloAsync } from '../src/async';

test('Test Async Function', async () => {
  const result = await sayHelloAsync('Thomas Alberto');
  expect(result).toBe('Hello Thomas Alberto');
});

test('Test Async Matchers', async () => {
  await expect(sayHelloAsync('Thomas Alberto')).resolves.toBe(
    'Hello Thomas Alberto'
  );
  await expect(sayHelloAsync()).rejects.toBe('Name is empty');
});
