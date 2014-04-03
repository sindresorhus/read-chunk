# read-chunk [![Build Status](https://travis-ci.org/sindresorhus/read-chunk.svg?branch=master)](https://travis-ci.org/sindresorhus/read-chunk)

> Read a chunk from a file

Because the built-in way is too much boilerplate.


## Install

```bash
$ npm install --save read-chunk
```


## Usage

```js
var readChunk = require('read-chunk');

// foo.txt => hello

readChunk.sync('foo.txt', 1, 3);
//=> ell
```


## API

### readChunk(filepath, position, length, callback)

#### filepath

Type: `String`

#### position

Type: `Number`

Position to start reading.

#### length

Type: `Number`

Number of bytes to read.

#### callback(error, buffer)

Type: `Function`


### readChunk.sync(filepath, start, length)

Same arguments as `readChunk` except the callback.

Returns a buffer.


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
