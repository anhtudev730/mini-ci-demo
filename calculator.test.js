const test = require('node:test');
const assert = require('node:assert/strict');

const {
  add,
  subtract,
  multiply
} = require('./calculator');

test('2 + 3 should equal 5', () => {
  assert.equal(add(2, 3), 5);
});

test('5 - 3 should equal 2', () => {
  assert.equal(subtract(5, 3), 2);
});

test('4 * 3 should equal 12', () => {
  assert.equal(multiply(4, 3), 12);
});