import {expectType} from 'tsd';
import readChunk = require('.');

expectType<Promise<Buffer>>(readChunk('foo.txt', 1, 3));
expectType<Buffer>(readChunk.sync('foo.txt', 1, 3));
