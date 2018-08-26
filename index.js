'use strict';
const fs = require('fs');
const pify = require('pify');
const withOpenFile = require('with-open-file');

const fsReadP = pify(fs.read, {multiArgs: true});

module.exports = (filepath, pos, len) => {
	const buf = Buffer.alloc(len);

	return withOpenFile(filepath, 'r', fd =>
		fsReadP(fd, buf, 0, len, pos)
	)
		.then(([bytesRead, buf]) => {
			if (bytesRead < len) {
				buf = buf.slice(0, bytesRead);
			}

			return buf;
		});
};

module.exports.sync = (filepath, pos, len) => {
	let buf = Buffer.alloc(len);

	const bytesRead = withOpenFile.sync(filepath, 'r', fd =>
		fs.readSync(fd, buf, 0, len, pos)
	);

	if (bytesRead < len) {
		buf = buf.slice(0, bytesRead);
	}

	return buf;
};
