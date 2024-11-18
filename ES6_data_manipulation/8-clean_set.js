export default function cleanSet(set, startString) {
  if (startString === '') {
    return startString;
  }

  let endString = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      endString += `${item.replace(startString, '')}-`
    }
  }

  if (endString.charAt(endString.length - 1) === '-') {
    endString = endString.slice(0, -1);
  }

  return endString;
}
