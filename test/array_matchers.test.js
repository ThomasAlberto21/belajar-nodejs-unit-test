test('Array Simple', () => {
  const names = ['Thomas', 'Alberto'];

  expect(names).toEqual(['Thomas', 'Alberto']);
  expect(names).toContain('Thomas');
});

test('Array with Objects', () => {
  const person = [
    {
      name: 'Thomas',
      age: 19,
    },
    {
      name: 'Budi',
      age: 20,
    },
  ];

  expect(person).toContainEqual({ name: 'Thomas', age: 19 });
  expect(person).toEqual([
    { name: 'Thomas', age: 19 },
    { name: 'Budi', age: 20 },
  ]);
});
