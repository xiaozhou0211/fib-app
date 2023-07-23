import { IntegerInput } from './NaturalNumberInput';

describe("integerInput function testing", () => {
    it("Check if value is not a integer or empty return false", () => {
        expect(IntegerInput("hello world")).toBe(false);
        expect(IntegerInput("123.5")).toBe(false);
        expect(IntegerInput("-123")).toBe(false);
        expect(IntegerInput("")).toBe(false);
    });
    it("Check if value is a integer return true", () => {
        expect(IntegerInput("123")).toBe(true);
    });
});