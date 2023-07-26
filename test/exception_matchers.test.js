import { MyException, callMe } from '../src/exception';

test('Exception', () => {
  expect(() => callMe('Thomas')).toThrow();
  expect(() => callMe('Thomas')).toThrow(MyException);
  expect(() => callMe('Thomas')).toThrow('This is an error');
});
