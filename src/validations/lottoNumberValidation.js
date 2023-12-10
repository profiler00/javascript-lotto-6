import { lotto } from '../constants/constants';

const checkLength = lottoArray => {
  return lottoArray.length !== lotto.LENGTH;
};

const isNotValidNumber = number => {
  const isNotValid =
    number < lotto.MIN_RANGE ||
    number > lotto.MAX_RANGE ||
    Number.isNaN(number);
  return isNotValid;
};

const checkLottoNumber = lottoArray => {
  for (const number of lottoArray) {
    if (isNotValidNumber(number)) {
      return true;
    }
  }
  return false;
};

const checkDuplicates = lottoArray => {
  return new Set(lottoArray).size !== lotto.LENGTH;
};

export { checkDuplicates, checkLength, checkLottoNumber };
