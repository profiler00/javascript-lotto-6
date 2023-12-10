import { MissionUtils } from '@woowacourse/mission-utils';
import { getPurchase } from './utils/getPurchase.js';
import { getLottoCount } from './utils/getLottoCount.js';
import { createLotto } from './utils/createLotto';

import Lotto from './Lotto';

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    createLotto(lottoCount);
  }
}

export default App;
