import { Fibonacci } from "./FibonacciSequence";

describe("fibonacci functions testing", () => {
    it("Check fibonacci function returned array", () => {
        const array1 = Fibonacci(2)
        expect(array1).toBeInstanceOf(Array)
        const array2 = Fibonacci(5)
        expect(array2).toBeInstanceOf(Array)
    });
    it("Check fibonacci function returned correct value", () => {
        const value1 = Fibonacci(2)
        expect(value1).toStrictEqual([0, 1]);
        const value2 = Fibonacci(5)
        expect(value2).toStrictEqual([0, 1, 1, 2, 3]);
        const value3 = Fibonacci(9)
        expect(value3).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    });
});