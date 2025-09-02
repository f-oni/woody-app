const mul = require('./mul');

test('mutiplies 2 * 3 to equal 6', () => {
  expect(mul(2, 3)).toBe(6);
});