const { describe, test, expect } = require("@jest/globals");
const sum = require("../js/sum_arguments");


describe("Test for all number", function () {
  test("Should work on all postive numbers", function () {
    expect(sum(2, 2)).toBe(4);
    expect(sum(0, 0)).toBe(0);
    expect(sum(2, 10)).toBe(12);
  });

  test("Should work on all negative numbers", function () {
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-10, -5)).toBe(-15);
    expect(sum(-11, -1)).toBe(-12);
  });
});

describe("Test sum function characters", function () {
  test("It should not add twoo characters", function () {
    expect(sum("a", "b")).toBeUndefined();
  });
});