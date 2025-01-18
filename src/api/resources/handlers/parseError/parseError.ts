import { AxiosError } from 'axios';
import { IErrorResponse } from './ErrorResponse.types';

/**
 * Parse the error response object and returns its error string
 *
 * @param {unknown} error
 *   The Error being thrown when triggering API call
 * @param {string} defaultErrorMsg
 *   default frontend well-formatted error message for the calling API
 *
 * @returns {string}
 *   error message to be displayed or handled
 */
const parseError = (error: unknown, defaultErrorMsg: string): string => {
  try {
    if (error instanceof AxiosError) {
      const errorResponse = error?.response;
      const errorData = errorResponse?.data as IErrorResponse;

      // if parsing failed, return default frontend well-formatted error message
      if (!errorData) {
        return defaultErrorMsg;
      }

      // return backend-provided error message
      else if (errorData.message) {
        return errorData.message;
      }
      // return frontend well-formatted error message if backend error message is not existing
      else {
        return defaultErrorMsg;
      }
    } else {
      return defaultErrorMsg;
    }
  } catch {
    return defaultErrorMsg;
  }
};

export { parseError };
