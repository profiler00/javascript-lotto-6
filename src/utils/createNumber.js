import { MissionUtils } from '@woowacourse/mission-utils';

export const createNumber = () => {
  const array = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  const lottoArray = array.sort((a, b) => a - b);

  return lottoArray;
};
