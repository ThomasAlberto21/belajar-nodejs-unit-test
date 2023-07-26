test('String', () => {
  const name = 'Thomas Alberto';

  expect(name).toBe('Thomas Alberto');
  expect(name).toEqual('Thomas Alberto');
  expect(name).toMatch(/mas/);
});
