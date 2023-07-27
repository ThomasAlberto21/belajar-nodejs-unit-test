test('String Not Matchers', () => {
  const name = 'Thomas Alberto';

  expect(name).not.toBe('Joko');
  expect(name).not.toEqual('Joko');
  expect(name).not.toMatch(/Joko/);
});

test('Number Not Matchers', () => {
  const value = 2 + 3;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBeLessThan(2);
});
