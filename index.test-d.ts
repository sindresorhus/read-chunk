import {expectType} from 'tsd-check';
import readChunk from '.';

expectType<Promise<Buffer>>(readChunk('foo.txt', 1, 3));
expectType<Buffer>(readChunk.sync('foo.txt', 1, 3));
