const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('../utils/constants');

const LottoMachine = {
  issue() {
    const numbers = Random.pickUniqueNumbersInRange(LOTTO.min, LOTTO.max, LOTTO.size);
    return numbers.sort((a, b) => a - b);
  },
};

module.exports = LottoMachine;
