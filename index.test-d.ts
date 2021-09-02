import {Buffer} from 'node:buffer';
import {expectType} from 'tsd';
import {readChunk, readChunkSync} from './index.js';

expectType<Promise<Buffer>>(readChunk('foo.txt', {length: 3, startPosition: 1}));
expectType<Buffer>(readChunkSync('foo.txt', {length: 3, startPosition: 1}));
