import addNumbers from "./index";

describe("addNumbers", () => {
  describe("Step-1: Basic addition", () => {
    describe("Valid inputs", () => {
      it("should give 0 when passed empty string", () => {
        expect(addNumbers("")).toBe(0);
      });
      it("should give the number when passed number string", () => {
        expect(addNumbers("1")).toBe(1);
      });
      it("should give sum of numbers when passed comma-separated number string", () => {
        expect(addNumbers("1,2")).toBe(3);
      });
    });

    describe("Invalid inputs", () => {
      it("should throw error when passed invalid number string", () => {
        expect(() => addNumbers("1,")).toThrow("Invalid input");
      });
      it("should throw error when passed invalid characters as numbers in number string", () => {
        expect(() => addNumbers("1,a,3")).toThrow("Invalid input");
      });
      it("should throw error when number is missing between delimiters in number string", () => {
        expect(() => addNumbers("1,,2")).toThrow("Invalid input");
      });
    });
  });
});
