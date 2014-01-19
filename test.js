'use strict';
var fs = require('fs');
var assert = require('assert');
var readChunk = require('./index');

describe('readChunk()', function () {
	it('should read chunks from a file', function (cb) {
		readChunk('fixture', 1, 4, function (err, buf) {
			assert.equal(buf.toString(), 'ello');
			cb();
		});
	});
});

describe('readChunk.sync()', function () {
	it('should read chunks from a file', function () {
		assert.equal(readChunk.sync('fixture', 1, 4).toString(), 'ello');
	});
});
