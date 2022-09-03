import App from '../src/main';

test('calcularPerimetroCirculo(): 9 to equal 56.54', () => {
  let myApp = new App();
  expect(myApp.calcularPerimetroCirculo(9).toFixed(2)).toBe((3.1416*2*9).toFixed(2))
})
