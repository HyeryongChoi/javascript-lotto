const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('../utils/constants');

const LottoMachine = {
  issue() {
    return Random.pickUniqueNumbersInRange(LOTTO.min, LOTTO.max, LOTTO.size);
  },
};

module.exports = LottoMachine;
