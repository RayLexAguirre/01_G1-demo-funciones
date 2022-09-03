import App from '../src/main';

test('convertirADolar():  100 to equal 4.46', () => {
  let myApp = new App();
  expect(myApp.convertirADolar(100).toFixed(2)).toBe((100/22.4).toFixed(2));
});
