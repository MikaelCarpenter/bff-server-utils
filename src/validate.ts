import invariant from 'tiny-invariant';

/**
 * This uses `tiny-invariant` under the hood, but throws an Error with your message, because tiny-invariant strips that message in production.
 * This is useful for getting your message to the client.
 *
 * @param condition
 * @param message
 */
export default function validate(condition: unknown, message: string): asserts condition {
  try {
    invariant(condition);
  } catch {
    throw new ValidationError(message);
  }
}

/**
 * Thrown when we've explicitly tried to assert state that our program requires to be true and it was false.
 */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
