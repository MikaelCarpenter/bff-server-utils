import { assertEquals } from 'https://deno.land/std@0.224.0/assert/mod.ts';
import validate from '../validate.ts';

Deno.test('validate does not throw an error when condition is truthy', () => {
  validate(true, 'This is an error message.');
});

Deno.test('validate throws a validation error when condition is falsy', () => {
  try {
    validate(false, 'This is an error message.');
  } catch (error) {
    assertEquals(error.message, 'This is an error message.');
    assertEquals(error.name, 'ValidationError');
  }
});
