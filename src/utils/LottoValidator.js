const { LOTTO, ERROR_MESSAGE } = require('./constants');
const Validator = require('./Validator');

class LottoValidator extends Validator {
  static validateLotto(numbers) {
    if (
      !LottoValidator.hasNElements(numbers, LOTTO.size) ||
      !LottoValidator.isBetween(numbers, LOTTO.min, LOTTO.max) ||
      LottoValidator.hasDuplicateElements(numbers)
    ) {
      throw new Error(ERROR_MESSAGE.invalidLotto);
    }
  }

  static validateWinningNumbersInput(str) {
    const NUMBER_COMMA_REGEXP = /^[0-9,]+$/;
    const START_IS_COMMA_REGEXP = /^[,]/;
    const END_IS_COMMA_REGEXP = /[,]$/;
    const DUPLICATE_COMMA_REGEXP = /[,]{2,}/;

    if (
      !NUMBER_COMMA_REGEXP.test(str) ||
      DUPLICATE_COMMA_REGEXP.test(str) ||
      START_IS_COMMA_REGEXP.test(str) ||
      END_IS_COMMA_REGEXP.test(str)
    ) {
      throw new Error(ERROR_MESSAGE.invalidWinningNumbers);
    }
  }

  static validateWinningNumbers(numbers) {
    if (
      !LottoValidator.hasNElements(numbers, LOTTO.size) ||
      !LottoValidator.isBetween(numbers, LOTTO.min, LOTTO.max) ||
      LottoValidator.hasDuplicateElements(numbers)
    ) {
      throw new Error(ERROR_MESSAGE.invalidWinningNumbers);
    }
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (
      !LottoValidator.isNumeric(bonusNumber) ||
      !LottoValidator.isBetween(bonusNumber, LOTTO.min, LOTTO.max) ||
      winningNumbers.has(parseInt(bonusNumber, 10))
    ) {
      throw new Error(ERROR_MESSAGE.invalidBonusNumber);
    }
  }
}

module.exports = LottoValidator;
