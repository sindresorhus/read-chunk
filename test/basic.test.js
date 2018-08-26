import path from 'path';
import test from 'ava';
import m from '..';

const FIXTURE_PATH = path.join(__dirname, 'fixture');

test('read chunks from a file', async t => {
	t.is((await m(FIXTURE_PATH, 1, 4)).toString(), 'ello');
});

test('slice buffer if read bytes count is less than requested length', async t => {
	t.is((await m(FIXTURE_PATH, 0, 15)).toString(), 'hello\n');
});

test('synchronously read chunks from a file', t => {
	t.is(m.sync(FIXTURE_PATH, 1, 4).toString(), 'ello');
});

test('synchronously slice buffer if read bytes count is less than requested length', t => {
	t.is(m.sync(FIXTURE_PATH, 0, 15).toString(), 'hello\n');
});
