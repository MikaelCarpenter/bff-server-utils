/**
 * Prove a proposition to be true, otherwise throw an Error.
 *
 * @param proposition :: The proposition to assert. This should be a statement about the state of your program that can be either true or false.
 * @param message :: The error message to use if the proposition is false.
 * @param ErrorInterfaceClass :: The class to use for the error if the proposition is false.
 *
 * @throws If the proposition is false.
 *
 * @example
 * // Catch this error and save it to your logs
 * prove(response.ok, "Encountered an error fetching data.")
 */
export default function prove(
  proposition: unknown,
  message: string,
  ErrorInterfaceClass: ErrorInterface = Error
): asserts proposition {
  if (!proposition) {
    throw new ErrorInterfaceClass(message);
  }
}

export type ErrorInterface = new (msg: string) => Error;
