test('Test toBe', () => {
  const name = 'John Doe';
  const sayHello = `Hello ${name}`;

  expect(sayHello).toBe('Hello John Doe');
});

test('Test toEqual', () => {
  const person = { id: 1 };
  Object.assign(person, { name: 'Thomas' });

  expect(person).toEqual({ id: 1, name: 'Thomas' });
});
