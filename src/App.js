import { getPurchase } from './utils/getPurchase';
import { getLottoCount } from './utils/getLottoCount';
import { createLotto } from './utils/createLotto';
import { getLottoNumber } from './utils/getLottoNumber';
import { getBonusNumber } from './utils/getBonusNumber';
import { getLottoResult } from './utils/getLottoResult';
import { getRanking, getRankResult } from './utils/getLottoRanking';
import { getPrize, getEarningRate } from './utils/getEarningRate';

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);
    const lottoArray = createLotto(lottoCount);
    const winningLotto = await getLottoNumber();
    await getBonusNumber(winningLotto);

    const winningCount = getLottoResult(lottoArray, winningLotto);

    const lottoRanking = getRanking(winningCount);
    getRankResult(lottoRanking);
    const prize = getPrize(lottoRanking);
    getEarningRate(prize, cash);
  }
}

export default App;
