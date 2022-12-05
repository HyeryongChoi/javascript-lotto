const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/constants');

const InputView = {
  readBudget(callback) {
    Console.readLine(INPUT_MESSAGE.enterBudget, callback);
  },

  readWinningNumbers(callback) {
    Console.readLine(INPUT_MESSAGE.enterWinningNumbers, callback);
  },

  readBonusNumber(callback) {
    Console.readLine(INPUT_MESSAGE.enterBonusNumber, callback);
  },
};

module.exports = InputView;
