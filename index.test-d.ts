import {expectType} from 'tsd';
import {readChunk, readChunkSync} from './index.js';

expectType<Promise<Uint8Array>>(readChunk('foo.txt', {length: 3, startPosition: 1}));
expectType<Uint8Array>(readChunkSync('foo.txt', {length: 3, startPosition: 1}));
