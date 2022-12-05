const INPUT_MESSAGE = Object.freeze({
  enterBudget: '구입금액을 입력해 주세요.\n',
  enterWinningNumbers: '\n당첨 번호를 입력해 주세요\n',
  enterBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  newLine: '\n',
  buyLotto: (quantity) => `${quantity}개를 구매했습니다.`,
});

const ERROR_MESSAGE = Object.freeze({
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
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  LOTTO,
};
