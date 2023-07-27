export const sayHelloAsync = (name) => {
  return new Promise((resolves, rejects) => {
    setTimeout(() => {
      if (name) {
        resolves(`Hello ${name}`);
      } else {
        rejects('Name is empty');
      }
    }, 1000);
  });
};
