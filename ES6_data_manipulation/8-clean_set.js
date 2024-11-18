export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

	let str = '';

	set.forEach(item => {
		if (item.startsWith(startString)) {
			str += (str ? '-' : '') + item.slice(startString.length)
		}
	});

	return str;
}
