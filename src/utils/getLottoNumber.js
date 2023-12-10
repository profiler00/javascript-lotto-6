import { MissionUtils } from '@woowacourse/mission-utils';
import { inputMessage } from '../constants/messages';
import Lotto from '../Lotto';

const createInputLotto = input => {
  const lottoArray = input.split(',').map(Number);
  return new Lotto(lottoArray);
};

export const getLottoNumber = async () => {
  MissionUtils.Console.print(inputMessage.ENTER);
  let input = await MissionUtils.Console.readLineAsync(
    inputMessage.LOTTO_MESSAGE,
  );
  let lotto;

  while (true) {
    try {
      lotto = createInputLotto(input);
      break;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      input = await MissionUtils.Console.readLineAsync(
        inputMessage.LOTTO_MESSAGE,
      );
    }
  }
  return lotto;
};
