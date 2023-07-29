import { getBalance } from '../src/async';

// Get Balance Success
test('Mock Async Function Success', async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);
  await expect(getBalance('Thomas', from)).resolves.toEqual({
    name: 'Thomas',
    balance: 1000,
  });

  await expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

// Get Balance Failed
test.failing('Mock Async Function Failed', async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error('Balance is empty'));
  await getBalance('Thomas', from);
});
