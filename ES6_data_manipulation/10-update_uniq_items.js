export default function updateUniqueItems(map) {
	if (!(map instanceof Map)) {
		throw new Error("Cannot process")
	}

	for (const [fruit, quantity] of map) {
		if (quantity == 1) {
			map.set(fruit, 100);
		}
	}

	return map;
}
