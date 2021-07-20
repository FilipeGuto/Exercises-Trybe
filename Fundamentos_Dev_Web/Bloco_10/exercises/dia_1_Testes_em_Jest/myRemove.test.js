const removeTeste = require('./myRemove');

describe('verifica se retorna o array esperado', () => {
  test('myRemove([1, 2, 3, 4]', () => {
    expect(removeTeste([1, 2, 3, 4], 3)).toBe([1, 2, 3, 4], 3);
  });
    test('Array não esperado [1, 2, 3, 4]', () => {
    expect(removeTeste(myRemove([1, 2, 3, 4], 3))).not.toBe([1, 2, 3, 4]);
    })
  })