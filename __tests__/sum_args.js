const { describe, test, expect } = require("@jest/globals");

const sum = require("../src/sum_args");

describe("testing for sum of args", function () {
    test("test1", function () {
        expect(sum(1, 2, 3, 4)).toBe(10);
        expect(sum(0)).toBe(0);
        expect(sum(0, 100)).toBe(100);
        expect(sum(-1, 0, 100)).toBe(99);
    });
});
