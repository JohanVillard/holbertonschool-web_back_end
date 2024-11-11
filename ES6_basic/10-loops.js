export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [...array];
  for (const [index, value] of arrayCopy.entries()) {
    arrayCopy[index] = appendString + value;
  }

  return arrayCopy;
}
