'use strict';
var assert = require('assert');
var readChunk = require('./');

describe('readChunk()', function () {
	it('should read chunks from a file', function (cb) {
		readChunk('fixture', 1, 4, function (err, buf) {
			assert.equal(buf.toString(), 'ello');
			cb();
		});
	});

	it('should slice buffer if read bytes count is less than requested length', function (cb) {
		readChunk('fixture', 0, 15, function (err, buf) {
			assert.equal(buf.toString(), 'hello\n');
			cb();
		});
	});
});

describe('readChunk.sync()', function () {
	it('should read chunks from a file', function () {
		assert.equal(readChunk.sync('fixture', 1, 4).toString(), 'ello');
	});

	it('should slice buffer if read bytes count is less than requested length', function () {
		assert.equal(readChunk.sync('fixture', 0, 15).toString(), 'hello\n');
	});
});
