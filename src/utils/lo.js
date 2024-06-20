/**
 * Checks if a given value is empty.
 *
 * @param {*} value - The value to check for emptiness.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 */
export function isEmpty(value) {
  if (value == null || value == undefined || isNaN(value)) {
    return true;
  }

  if (typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'number' && value != 0) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  // For any other types, assume it's not empty
  return false;
}
