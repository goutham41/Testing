const { describe, test, expect } = require("@jest/globals");
const income = require("../js/tax_calculator");

describe("Test for all tax payer income", function () {
  test("income greater 1000000", function () {
    expect(income(1100000)).toBe(330000);
  });

  test("income greater 500000 and lessthan 1000000", function () {
    expect(income(700000)).toBe(140000);
  });

  test("income greater 250000 and lessthan 500000", function () {
    expect(income(450000)).toBe(45000);
  });

  test("income lessthan 250000", function () {
    expect(income(240000)).toBe(240000);
  });
});
