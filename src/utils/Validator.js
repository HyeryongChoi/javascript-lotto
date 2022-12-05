class Validator {
  static isNumeric(str) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    return NUMBER_REGEXP.test(str);
  }

  static isZeroStart(str) {
    const ZERO_START_REGEXP = /^[0]+/;
    return ZERO_START_REGEXP.test(str);
  }

  static isDivisibleBy(str, unit) {
    return parseInt(str) % unit === 0;
  }

  static hasDuplicateElements(arr) {
    const setToCompare = new Set(arr);
    return arr.length !== setToCompare.size;
  }

  static hasNElements(arr, num) {
    return arr.length === num;
  }

  static isBetween(numbers, start, end) {
    if (typeof numbers === 'string') {
      return start <= parseInt(numbers, 10) && parseInt(numbers, 10) <= end;
    }
    return numbers.every((num) => start <= num && num <= end);
  }
}

module.exports = Validator;
