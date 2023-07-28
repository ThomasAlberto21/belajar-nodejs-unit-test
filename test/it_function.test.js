import { sumAll } from '../src/sum.js';

describe('When call sumAll()', () => {
  it('Should get 30 with parameter [10 , 10 , 10]', () => {
    expect(sumAll([10, 10, 10])).toBe(30);
  });
  it('Should get 50 with parameter [10 , 10 , 10 , 10 , 10]', () => {
    expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
  });
});
