import { sum } from '../src/sum';

beforeAll(() => {
  console.log('before All');
});

afterAll(() => {
  console.log('after All');
});

beforeEach(() => {
  console.log('before Each');
});

afterEach(() => {
  console.log('after Each');
});

test('Test 1', () => {
  expect(sum(1, 2)).toBe(3);
  console.log('Test 1');
});

test('Test 2', () => {
  expect(sum(1, 2)).toBe(3);
  console.log('Test 2');
});
