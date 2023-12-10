import { MissionUtils } from '@woowacourse/mission-utils';
import { inputMessage } from '../constants/messages';

export const getBonusNumber = async winningLotto => {
  MissionUtils.Console.print(inputMessage.ENTER);
  let input = await MissionUtils.Console.readLineAsync(
    inputMessage.BONUS_MESSAGE,
  );
  let bonusNumber;

  while (true) {
    try {
      bonusNumber = parseInt(input, 10);
      winningLotto.getBonus(bonusNumber);
      break;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      input = await MissionUtils.Console.readLineAsync(
        inputMessage.BONUS_MESSAGE,
      );
    }
  }
};
