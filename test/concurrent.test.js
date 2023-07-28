import { sayHelloAsync } from '../src/async.js';



test.concurrent('Concurrent 1', async () => {
  await expect(sayHelloAsync('John')).resolves.toBe('Hello John');
});
test.concurrent('Concurrent 2', async () => {
  await expect(sayHelloAsync('John')).resolves.toBe('Hello John');
});
test.concurrent('Concurrent 3', async () => {
  await expect(sayHelloAsync('John')).resolves.toBe('Hello John');
});
