const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../utils/constants');

const OutputView = {
  printPurchasedLottos(lottos) {
    Console.print(OUTPUT_MESSAGE.newLine);
    Console.print(OUTPUT_MESSAGE.buyLotto(lottos.length));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },
};

module.exports = OutputView;
