'use strict';
var assert = require('assert');
var readChunk = require('./');

describe('readChunk()', function () {
	it('should read chunks from a file', function () {
		return readChunk('fixture', 1, 4).then(function (buf) {
			assert.equal(buf.toString(), 'ello');
		});
	});

	it('should slice buffer if read bytes count is less than requested length', function () {
		return readChunk('fixture', 0, 15).then(function (buf) {
			assert.equal(buf.toString(), 'hello\n');
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
