/// <reference types="node"/>

/**
 * Read a chunk from a file asyncronously.
 *
 * @param filePath - The path to the file.
 * @param startingPosition - Position to start reading.
 * @param length - Number of bytes to read.
 * @returns A `Promise<Buffer>` for the read chunk.
 */
declare const readChunk: {
	(filePath: string, startingPosition: number, length: number): Promise<Buffer>;

	/**
	 * Read a chunk from a file synchronously.
	 *
	 * @param filePath - The path to the file.
	 * @param startingPosition - Position to start reading.
	 * @param length - Number of bytes to read.
	 * @returns A `Buffer` for the read chunk.
	 */
	sync(filePath: string, startingPosition: number, length: number): Buffer;
};

export default readChunk;
