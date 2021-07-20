const sumTest = require('./sum');

describe('verifica se a soma', () => {
  test('sum 4 + 5 = 9', () => {
    expect(sumTest(4, 5)).toBe(9);
  });
    test('sum 0 + 0 = 0', () => {
    expect(sumTest(0, 0)).toBe(0);
    })
  })
    test('sum 4 + "5" lança erro', () => {
    expect(() => {
      sumTest(4, '5');
    }).toThrow();
    })
    test('error com mensagem: parameters must be numbers', () => {
    expect(() => {
      sumTest(4, '5');
    }).toThrow(/parameters must be numbers/);
})