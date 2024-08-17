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
      it("should throw error when floating point number is there in number string", () => {
        expect(() => addNumbers("1,2.5,3")).toThrow("Invalid input");
      });
    });
  });

  describe("Step-2: Add any amout of numbers", () => {
    describe("Valid inputs", () => {
      it("should give sum of numbers when passed any amount of comma-separated number string", () => {
        const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
        const expectedSum = numbers.reduce((acc, num) => acc + num, 0);
        expect(addNumbers(numbers.join(","))).toBe(expectedSum);
      });
    });
  });

  describe("Step-3: Allow new line as delimiter", () => {
    describe("Valid inputs", () => {
      it("should give sum of numbers when passed comma-separated number string with new line delimiter", () => {
        expect(addNumbers("1\n2,3")).toBe(6);
      });
    });
    describe("Invalid inputs", () => {
      it("should throw error when number string ends with new line", () => {
        expect(() => addNumbers("1,2\n")).toThrow("Invalid input");
      });
    });
  });

  describe("Step-4: Allow custom delimiter", () => {
    describe("Valid inputs", () => {
      it("should give sum of numbers when passed number string with custom delimiter", () => {
        expect(addNumbers("//;\n1;2")).toBe(3);
      });
      it("should give sum of numbers when passed number string with custom delimiter and new line", () => {
        expect(addNumbers("//;\n1;2\n3")).toBe(6);
      });
      it.skip("should give sum of numbers when custom delimiter is a new line", () => {
        expect(addNumbers("//\n\n1\n2\n3")).toBe(6);
      });
      it("should give sum of numbers when custom delimiter is more than one characeters long", () => {
        expect(addNumbers("//aa\n1aa2aa3")).toBe(6);
      });
      it("should give sum of numbers when custom delimiter is a special character in regex pattern", () => {
        expect(addNumbers("//.\n1.2.3")).toBe(6);
      });
    });
    describe("Invalid inputs", () => {
      it("should throw error when custom delimiter is not followed by new line", () => {
        expect(() => addNumbers("//;1;2")).toThrow("Invalid input");
      });
    });
  });

  describe("Step-5: Disallow negative numbers", () => {
    describe("Invalid inputs", () => {
      it("should throw error when passed number string with negative numbers", () => {
        expect(() => addNumbers("1,-2,-3")).toThrow(
          "Negative numbers not allowed: -2,-3"
        );
      });
    });
  });
});
