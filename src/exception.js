export class MyException extends Error {}

export const callMe = (name) => {
  if (name === 'Thomas') {
    throw new MyException('This is an error');
  }
  return 'OK';
};
