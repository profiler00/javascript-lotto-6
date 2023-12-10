import { lotto } from '../constants/constants';

const isNotValidNumber = number => {
  const isNotValid =
    number < lotto.MIN_RANGE ||
    number > lotto.MAX_RANGE ||
    Number.isNaN(number);
  return isNotValid;
};

export const checkBonusNumber = number => {
  if (isNotValidNumber(number)) {
    return true;
  }
  return false;
};

export const checkBonusDuplicates = (lottoNumbers, number) => {
  return lottoNumbers.includes(number);
};
