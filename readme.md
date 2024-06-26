# read-chunk

> Read a chunk from a file

Because the built-in way requires way too much boilerplate.

## Install

```sh
npm install read-chunk
```

## Usage

```js
import {readChunk} from 'read-chunk';

// foo.txt => hello

await readChunk('foo.txt', {length: 3, startPosition: 1});
//=> 'ell'
```

## API

### readChunk(filePath, {length, startPosition})

Returns a `Promise<Uint8Array>` with the read chunk.

### readChunkSync(filePath, {length, startPosition})

Returns a `Uint8Array` with the read chunk.

#### filePath

Type: `string`

#### length

Type: `number`

The number of bytes to read.

#### startPosition

Type: `number`

The position to start reading from.
