/**
 * @module
 *
 * BFF Server Utils
 *
 * Contains simple utilities I find useful when writing BFF servers.
 */

/**
 * Re-exporting the '@mikael/prove' package.
 * This provides all the exports from '@mikael/prove' as a single 'prove' object.
 *
 * @see {@link https://jsr.io/@mikael/prove|@mikael/prove on jsr} for more information about the original package.
 */
export * as prove from '@mikael/prove';

export { default as validate } from './validate.ts';
export { ValidationError } from './validate.ts';
