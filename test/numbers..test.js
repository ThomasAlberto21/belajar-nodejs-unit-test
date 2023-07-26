test('Numbers', () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3); // Lebih besar dari 3
  expect(value).toBeGreaterThanOrEqual(3.5); // Lebih besar atau sama dengan 3.5

  expect(value).toBeLessThan(5); // Lebih kecil dari 5
  expect(value).toBeLessThanOrEqual(4.5); // Lebih kecil atau sama dengan 4.5

  expect(value).toBe(4); // Sama dengan 4
  expect(value).toEqual(4); // Sama dengan 4
});
