import { MissionUtils } from '@woowacourse/mission-utils';
import { getPurchase } from './utils/getPurchase.js';
import { getLottoCount } from './utils/getLottoCount.js';

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    MissionUtils.Console.print(lottoCount);
  }
}

export default App;
