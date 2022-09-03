import App from '../src/main';

test('sumar(): sumar 1 + 2 igual a 3', () => {
  let myApp = new App();
  expect(myApp.sumar(1, 2)).toBe(3);
});
