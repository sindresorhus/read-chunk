'use strict';
const fs = require('fs');
const pify = require('pify');

module.exports = (filepath, pos, len) => {
	const buf = new Buffer(len);

	let fd;

	return pify(fs.open)(filepath, 'r')
		.then(res => {
			fd = res;
		})
		.then(() => pify(fs.read, {multiArgs: true})(fd, buf, 0, len, pos))
		.then(res => pify(fs.close)(fd).then(() => res))
		.then(res => {
			const bytesRead = res[0];
			let buf = res[1];

			if (bytesRead < len) {
				buf = buf.slice(0, bytesRead);
			}

			return buf;
		});
};

module.exports.sync = (filepath, pos, len) => {
	let buf = new Buffer(len);

	const fd = fs.openSync(filepath, 'r');
	const bytesRead = fs.readSync(fd, buf, 0, len, pos);

	fs.closeSync(fd);

	if (bytesRead < len) {
		buf = buf.slice(0, bytesRead);
	}

	return buf;
};
