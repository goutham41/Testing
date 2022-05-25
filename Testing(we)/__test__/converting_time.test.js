const { describe, test, expect } = require("@jest/globals");
const convertingTime = require("../js/converting_time");

describe("Testing duration in to hours , minute , second , millisecond", function () {
  test("duration into secound", function () {
    expect(convertingTime(50000)).toBe("50secound");
    expect(convertingTime(25000)).toBe("25secound");
  });
  test("duration into minute", function () {
    expect(convertingTime(60000)).toBe("1minute");
    expect(convertingTime(540000)).toBe("9minute");
    expect(convertingTime(1020000)).toBe("17minute");
  });

  test("duration into hours", function () {
    expect(convertingTime(3600000)).toBe("1hours0minutes0secound");
    expect(convertingTime(80021001)).toBe("22hours13minutes41secound");
  });
});
