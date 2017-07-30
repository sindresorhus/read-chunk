import test from 'ava';
import m from '.';

test('read chunks from a file', async t => {
	t.is((await m('fixture', 1, 4)).toString(), 'ello');
});

test('slice buffer if read bytes count is less than requested length', async t => {
	t.is((await m('fixture', 0, 15)).toString(), 'hello\n');
});

test('synchronously read chunks from a file', t => {
	t.is(m.sync('fixture', 1, 4).toString(), 'ello');
});

test('synchronously slice buffer if read bytes count is less than requested length', t => {
	t.is(m.sync('fixture', 0, 15).toString(), 'hello\n');
});
