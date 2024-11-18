export default function CreateInt8TypedArray(length, position, value) {
	let buffer = new ArrayBuffer(length);

	let int8View = new Int8Array(buffer);
	if (position > (int8View.length - 1) || position < 0) {
		throw new Error("Position outside range")
	};

	int8View[position] = value;

	return new DataView(buffer); 
}
