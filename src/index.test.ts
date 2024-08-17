import addNumbers from "./index";

describe("addNumbers", () => {
  describe("Step-1: Basic addition", () => {
    it("should return -1", () => {
      expect(addNumbers("")).toBe(-1);
    });
  });
});
