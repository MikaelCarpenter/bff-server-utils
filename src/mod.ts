/**
 * @module
 *
 * BFF Server Utils
 *
 * Contains simple utilities I find useful when writing BFF servers.
 */

export { default as prove } from "@mikael/prove";
export type { ErrorInterface } from "@mikael/prove";

export { default as validate, ValidationError } from "./validate.ts";
