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
}

module.exports = Validator;
