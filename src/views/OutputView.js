const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, LOTTO } = require('../utils/constants');

const OutputView = {
  printPurchasedLottos(lottos) {
    Console.print(OUTPUT_MESSAGE.newLine + OUTPUT_MESSAGE.buyLotto(lottos.length));
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },

  printLottoResult({ rankCount, rateOfReturn }) {
    Console.print(OUTPUT_MESSAGE.winningStatistics);
    Console.print(OUTPUT_MESSAGE.fifthPlace(rankCount[LOTTO.fifth]));
    Console.print(OUTPUT_MESSAGE.fourthPlace(rankCount[LOTTO.fourth]));
    Console.print(OUTPUT_MESSAGE.thirdPlace(rankCount[LOTTO.third]));
    Console.print(OUTPUT_MESSAGE.secondPlace(rankCount[LOTTO.second]));
    Console.print(OUTPUT_MESSAGE.firstPlace(rankCount[LOTTO.first]));
    Console.print(OUTPUT_MESSAGE.totalRateOfReturn(OutputView.changeFormat(rateOfReturn)));
  },

  changeFormat(rateOfReturn) {
    return rateOfReturn.toLocaleString('en-US', {
      maximumFractionDigits: 1,
      minimumFractionDigits: 1,
    });
  },
};

module.exports = OutputView;
