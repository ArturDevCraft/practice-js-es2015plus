import { files } from './data.js';

const toByteConvertOperations = {
	B: (length) => {
		return length;
	},
	KB: (length) => {
		return length * 1024;
	},
	MB: (length) => {
		return length * 1024 * 1024;
	},
	GB: (length) => {
		return length * 1024 * 1024 * 1024;
	},
};

const fromByteConvertOperations = {
	B: (length) => {
		return length;
	},
	KB: (length) => {
		return length / 1024;
	},
	MB: (length) => {
		return length / 1024 / 1024;
	},
	GB: (length) => {
		return length / 1024 / 1024 / 1024;
	},
};

const recognizeUnit = (bytes) => {
	if (bytes < 1024) {
		return 'B';
	} else if (bytes < 1024 * 1024) {
		return 'KB';
	} else if (bytes < 1024 * 1024 * 1024) {
		return 'MB';
	} else if (bytes < 1024 * 1024 * 1024 * 1024) {
		return 'GB';
	}
};

const toConvenientUnit = (bytes) => {
	const unit = recognizeUnit(bytes);

	return { length: fromByteConvertOperations[unit](bytes), unit };
};

const convertToBytes = (unit = 'B', length) => {
	return toByteConvertOperations[unit](length);
};

const calculateTotalSize = (data) => {
	let totalSize = 0;
	data.forEach((el) => {
		const { unit, length } = el.size;
		const bytes = convertToBytes(unit, length);
		totalSize += bytes;
	});
	return toConvenientUnit(totalSize);
};

const total = calculateTotalSize(files);
console.log(total.length + ' ' + total.unit);
