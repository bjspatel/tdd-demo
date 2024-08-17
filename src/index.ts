const addNumbers = (inputStr: string): number => {
  if (inputStr === "") return 0;

  let delimiter = ",";
  let numbersStr = inputStr;
  if (inputStr.startsWith("//")) {
    const newLineIndex = inputStr.indexOf("\n");
    delimiter = inputStr.substring(2, newLineIndex);
    numbersStr = inputStr.substring(newLineIndex + 1);
  }

  const escapedDelimeter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const delimiterRegex = new RegExp(`${escapedDelimeter}|\\n`);
  const numberStrs = numbersStr.split(delimiterRegex);
  const negativeNumberStrs: string[] = [];
  const total = numberStrs.reduce((acc, numStr) => {
    if (/^-\d+$/.test(numStr)) {
      negativeNumberStrs.push(numStr);
      return acc;
    }

    if (/^\d+$/.test(numStr) === false) {
      throw new Error("Invalid input");
    }
    const currentNumber = parseInt(numStr, 10);
    if (isNaN(currentNumber)) {
      throw new Error("Invalid input");
    }
    return acc + currentNumber;
  }, 0);
  if (negativeNumberStrs.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumberStrs.join(",")}`
    );
  }
  return total;
};

export default addNumbers;
