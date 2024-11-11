export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [...array];
  for (const value of arrayCopy) {
    arrayCopy[arrayCopy.indexOf(value)] = appendString + value;
  }

  return arrayCopy;
}
