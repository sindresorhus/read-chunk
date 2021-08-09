import test from 'ava';

test('main', t => {
	t.pass();
});

/// import fs from 'node:fs';
// import test from 'ava';
// import sinon from 'sinon';

// const INVALID_FD = -1;
// const TEST_PATH = 'garbage';

// TODO: Enable when ESM supports hooks.

// test.before(() => {
// 	// We need to spy before requiring to get our spies into the promisified `fs`
// 	sinon.stub(fs, 'open').callThrough();
// 	sinon.spy(fs, 'close');

// 	sinon.stub(fs, 'openSync').callThrough();
// 	sinon.spy(fs, 'closeSync');
// });

// test.serial('closes the file descriptor when reading fails', async t => {
// 	const m = require('..');
// 	const fsOpenStub = fs.open.withArgs(TEST_PATH, 'r', sinon.match.func)
// 		.yields(undefined, INVALID_FD);

// 	await t.throwsAsync(m(TEST_PATH, 0, 4), Error,
// 		'fs.read should throw, given an invalid file descriptor');
// 	t.true(fsOpenStub.calledOnce);
// 	t.true(fs.close.withArgs(INVALID_FD).calledOnce);
// });

// test.serial('synchronously closes the file descriptor when reading fails', t => {
// 	const m = require('..');
// 	const fsOpenSyncStub = fs.openSync.withArgs(TEST_PATH, 'r')
// 		.returns(INVALID_FD);

// 	t.throws(_ => m.sync(TEST_PATH, 0, 4), Error,
// 		'fs.readSync should throw, given an invalid file descriptor');
// 	t.true(fsOpenSyncStub.calledOnce);
// 	t.true(fs.closeSync.withArgs(INVALID_FD).calledOnce);
// });
