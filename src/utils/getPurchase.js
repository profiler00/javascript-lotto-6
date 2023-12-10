import { MissionUtils } from '@woowacourse/mission-utils';
import { inputMessage } from '../constants/messages';
import { checkLottoPurchase } from '../validations/lottoPurchaseValidation';

export const getPurchase = async () => {
  let cash;

  while (true) {
    const input = await MissionUtils.Console.readLineAsync(
      inputMessage.PURCHASE_MESSAGE,
    );
    cash = parseInt(input, 10);
    if (checkLottoPurchase(cash)) break;
  }
  return cash;
};
