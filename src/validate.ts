import prove from '@mikael/prove';

/**
 * Validate user input or the result of a user action. If the input is invalid or the action is unsuccessful, throw an error to surface to the user.
 *
 * @param condition :: A condition that the input or action result must meet.
 * @param message :: A message to display to the user if the condition is not met.
 *
 * @throws If the condition is not met.
 *
 * @example
 * validate(isSuccessResponse(response), "Uh-oh! Something went wrong. Please try again.")
 *
 * @example
 * validate(phoneNumberRegex.test(phoneNumber), "Please enter a valid phone number.")
 */
export default function validate(condition: unknown, message: string): asserts condition {
  prove(condition, message, ValidationError);
}

/**
 * An error that is meant to be surfaced to the user.
 */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
