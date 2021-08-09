import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import {readChunk, readChunkSync} from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURE_PATH = path.join(__dirname, 'fixture');

test('read chunks from a file', async t => {
	t.is((await readChunk(FIXTURE_PATH, {startPosition: 1, length: 4})).toString(), 'ello');
});

test('slice buffer if read bytes count is less than requested length', async t => {
	t.is((await readChunk(FIXTURE_PATH, {length: 15})).toString(), 'hello\n');
});

test('synchronously read chunks from a file', t => {
	t.is(readChunkSync(FIXTURE_PATH, {length: 4, startPosition: 1}).toString(), 'ello');
});

test('synchronously slice buffer if read bytes count is less than requested length', t => {
	t.is(readChunkSync(FIXTURE_PATH, {length: 15}).toString(), 'hello\n');
});
