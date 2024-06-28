import {closeSync, openSync, readSync} from 'node:fs';
import {open} from 'node:fs/promises';

export async function readChunk(filePath, {length, startPosition}) {
	const fileDescriptor = await open(filePath, 'r');

	try {
		let {bytesRead, buffer} = await fileDescriptor.read({
			buffer: new Uint8Array(length),
			length,
			position: startPosition,
		});

		if (bytesRead < length) {
			buffer = buffer.subarray(0, bytesRead);
		}

		return buffer;
	} finally {
		await fileDescriptor?.close();
	}
}

export function readChunkSync(filePath, {length, startPosition}) {
	let buffer = new Uint8Array(length);
	const fileDescriptor = openSync(filePath, 'r');

	try {
		const bytesRead = readSync(fileDescriptor, buffer, {
			length,
			position: startPosition,
		});

		if (bytesRead < length) {
			buffer = buffer.subarray(0, bytesRead);
		}

		return buffer;
	} finally {
		closeSync(fileDescriptor);
	}
}
