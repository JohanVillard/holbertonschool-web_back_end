export default function cleanSet(set, startString) {
  let str = '';

  if (startString === '') {
    return str;
  }

  set.forEach((item) => {
    if (item.startsWith(startString)) {
      str += (str ? '-' : '') + item.slice(startString.length);
    }
  });

  return str;
}
