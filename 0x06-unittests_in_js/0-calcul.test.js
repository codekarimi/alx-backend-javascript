const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Rounds and adds two numbers', () => {
    assert.strictEqual(calculateNumber(1.9, 2.2), 4);
  });
  it('Round 0 and a positive number', () => {
    assert.strictEqual(calculateNumber(0, 1), 1);
  });
  it('Round 0 and a negative number', () => {
    assert.strictEqual(calculateNumber(0, -1), -1);
  });
  it('Round two negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
  });
  it('Round one positive and one negative number', () => {
    assert.strictEqual(calculateNumber(1, -3), -2);
  });
})
