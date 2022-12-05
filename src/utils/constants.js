const INPUT_MESSAGE = Object.freeze({
  enterBudget: '구입금액을 입력해 주세요.\n',
  enterWinningNumbers: '\n당첨 번호를 입력해 주세요\n',
  enterBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  newLine: '\n',
  winningStatistics: '\n당첨 통계\n---',
  buyLotto: (quantity) => `${quantity}개를 구매했습니다.`,
  firstPlace: (count) => `${LOTTO.six}개 일치 (2,000,000,000원) - ${count}개`,
  secondPlace: (count) => `${LOTTO.five}개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  thirdPlace: (count) => `${LOTTO.five}개 일치 (1,500,000원) - ${count}개`,
  fourthPlace: (count) => `${LOTTO.four}개 일치 (50,000원) - ${count}개`,
  fifthPlace: (count) => `${LOTTO.three}개 일치 (5,000원) - ${count}개`,
  totalRateOfReturn: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.\n`,
});

const ERROR_MESSAGE = Object.freeze({
  invalidLotto: '[ERROR] 로또 번호는 6개여야 합니다.',
  invalidBudget: '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.',
  invalidWinningNumbers:
    '[ERROR] 당첨 번호 입력은 1~45 사이의 "숫자,숫자,숫자,숫자,숫자,숫자"형식이어야 합니다.',
  invalidBonusNumber: '[ERROR] 보너스 번호는 당첨번호에 포함되지 않는 1~45 사이의 숫자여야 합니다.',
});

const LOTTO = Object.freeze({
  price: 1000,
  min: 1,
  max: 45,
  size: 6,
  prize: [0, 2000000000, 30000000, 1500000, 50000, 5000],
  six: 6,
  five: 5,
  four: 4,
  three: 3,
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  LOTTO,
};
