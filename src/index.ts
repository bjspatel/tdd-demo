const addNumbers = (inputStr: string): number => {
  if (inputStr === "") return 0;
  const numberStrs = inputStr.split(/,|\n/);
  const total = numberStrs.reduce((acc, numStr) => {
    const currentNumber = parseInt(numStr, 10);
    if (isNaN(currentNumber)) {
      throw new Error("Invalid input");
    }
    return acc + currentNumber;
  }, 0);
  return total;
};

export default addNumbers;
