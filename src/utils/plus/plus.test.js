import { plus } from './plus';

test('sumar 1 + 2 es igual a 3', () => {
  //arrange
  const paramsFirst = 1;
  const paramsSecond = 2;

  //act
  const result = plus(paramsFirst, paramsSecond);
  const expected = 3;

  //Assert
  expect(result).toBe(expected);
});
