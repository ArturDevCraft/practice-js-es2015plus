import { files } from './data.js';

const units = ['B', 'KB', 'MB', 'GB'];

const convert = {
	toBytes: (unit = 'B', length = 0) => {
		const exp = units.indexOf(unit);
		const base = 1024;
		const power = Math.pow(base, exp);
		return length * power;
	},
	fromBytes: (unit = 'B', length = 0) => {
		const exp = units.indexOf(unit) * -1;
		const base = 1024;
		const power = Math.pow(base, exp);
		return length * power;
	},
};

const recognizeUnit = (bytes) => {
	let recognizedUnit = units[0];
	units.every((unit, index) => {
		if (bytes >= Math.pow(1024, index)) {
			recognizedUnit = unit;
			return true;
		} else {
			return false;
		}
	});
	return recognizedUnit;
};

const toConvenientUnit = (bytes) => {
	const unit = recognizeUnit(bytes);

	return { length: convert.fromBytes(unit, bytes), unit };
};

const calculateTotalSize = (data) => {
	let totalSize = 0;
	data.forEach((el) => {
		const { unit, length } = el.size;
		console.log(unit);
		if (units.indexOf(unit) < 0 && unit) {
			alert('Jednostka: ' + unit + ' nierozpoznana!');
		} else {
			const bytes = convert.toBytes(unit, length);
			totalSize += bytes;
		}
	});
	return toConvenientUnit(totalSize);
};

const total = calculateTotalSize(files);
console.log(total.length + ' ' + total.unit);
