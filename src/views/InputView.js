const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/constants');

const InputView = {
  readBudget(callback) {
    Console.readLine(INPUT_MESSAGE.enterBudget, callback);
  },

  readWinningNumbers(callback) {
    Console.readLine(INPUT_MESSAGE.enterWinningNumbers, callback);
  },
};

module.exports = InputView;
