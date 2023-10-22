import { defineStore } from 'pinia';
import { config } from '@/stores';
export const talking = defineStore({
  id: 'talking',
  state: () => ({
    // 確認薪資對話
    checkMoneyTalking: [
      { name: '我一個月只要money両就可以。' },
      { name: '一個月money両可以接受嗎..' },
      { name: '一個月money両就行了!' },
      { name: '一個月money両,很划算吧。' },
    ],
    // 決定雇用對話
    hireOK: [
      { name: '謝謝啦，不會讓你失望的。' },
      { name: '我必定竭盡所能，不負您的期望。' },
      { name: '請放心，我必定不辜負您的期待。' },
      { name: '謝謝您的信任，我會努力工作，不負您的期望。' },
    ],
    // 傳喚員工對話
    meetStaffTalking: [
      { name: '老板，找我有甚麼事嗎？' },
      { name: '老板，我需要做什麼嗎？' },
      { name: '有什麼事情需要處理嗎。' },
      { name: '有什麼指示嗎，老板？' },
      { name: '您看起來心情不錯。有什麼話想跟我說的嗎？' },
      { name: '有什麼急事需要處理嗎？' },
    ],
    // 拿到小費的對話
    tipTalking: [
      { name: '老板，謝謝你。整個人都有幹勁了。', limit: '' },
      { name: '老板，這是您的小費。謝謝您的慷慨。', limit: '' },
      { name: '感謝老板的賞賜，我會繼續努力的。', limit: '' },
      { name: '老板，這是我應該的嗎？太感激了。', limit: '' },
      { name: '老板，您太客氣了。我會用心工作的。', limit: '' },
      { name: '謝謝老板的賞賜。', limit: '' },
    ],
    // 加薪對話
    addPayTalking: [
      { name: '感謝老板，我會更加努力的！', limit: '' },
      { name: '老板，謝謝您的看重，我會繼續努力的！', limit: '' },
      { name: '這是對我的肯定，謝謝老板！', limit: '' },
      { name: '非常感激，老板！我會保證您不會失望的！', limit: '' },
      { name: '謝謝您的信任，我會更加專注於工作的！', limit: '' },
      { name: '這對我來說意義重大，謝謝老板的鼓勵！', limit: '' },
      { name: '謝謝您，老板。我會記住這份恩情的！', limit: '' },
      { name: '真的嗎？太感謝了！我不會辜負您的期望的！', limit: '' },
    ],
    // 預解雇對話
    preFireTalking: [
      { name: '老板，你是認真的嗎...', limit: '' },
      { name: '等等...你是認真的嗎？', limit: '' },
      { name: '我...我不知道該說什麼...', limit: '' },
      { name: '哎呀，這真的讓我非常震驚...', limit: '' },
      { name: '什麼？這...這怎麼可能？', limit: '' },
      { name: '是在開玩笑嗎...', limit: '' },
    ],
    // 確定解僱對話
    yesFireTalking: [
      { name: '我明白了，老板。或許這就是命運吧。', limit: '' },
      { name: '好吧，我試過了。謝謝這段時間的機會。', limit: '' },
      { name: '看來我們的路不再交匯。這是一種宿命吧。', limit: '' },
      { name: '這真的太不公平了！我付出了這麼多，竟然這樣對我！', limit: '' },
      { name: '這樣對待我，我絕對不會忘記的！', limit: '' },
      { name: '你會後悔的，這是對我不公平的對待！', limit: '' },
    ],
    // 取消解僱對話
    noFireTalking: [
      { name: '改變主意了嗎...真是讓人摸不著頭緒...', limit: '' },
      { name: '後悔了嗎？我可是差點就要走了...', limit: '' },
      { name: '剛才要解僱我的嗎...是不是搞錯了什麼...', limit: '' },
      { name: '這可不是開玩笑的事情!', limit: '' },
    ],
    // 升職對話
    upShopkeeperTalking: [
      { name: '謝謝您的信任，老板。我會全力以赴的！', limit: '' },
      { name: '我會好好工作的，老板。感謝您給予這個機會！', limit: '' },
      { name: '我會盡力不辜負您的期望，老板。謝謝您提拔我！', limit: '' },
      { name: '感謝您的信任，老板。我會用心做好這份工作的！', limit: '' },
      { name: '謝謝您的看重，老板。我會讓您刮目相看的！', limit: '' },
      { name: '我不會辜負您的期望，老板。謝謝您的提拔！', limit: '' },
      { name: '謝謝您給予這個機會，老板。我會盡全力的！', limit: '' },
      { name: '我會保持努力，不讓您失望的，老板。謝謝您的信任！', limit: '' },
      { name: '感謝您的支持，老板。我會更加努力的！', limit: '' },
      { name: '我會珍惜這個機會，老板。謝謝您的提拔！', limit: '' },
    ],
    // 介紹人在介紹對象時的對話
    introducerHelpHireTalking: [
      { name: '需要我幫忙介紹people嗎?', limit: '' },
      { name: '需要我為您介紹people嗎?', limit: '' },
      { name: '需要我為您找people嗎?', limit: '' },
      { name: '需要我為您尋找people嗎?', limit: '' },
      { name: '需要我為您引薦people嗎?', limit: '' },
      { name: '需要我幫您介紹people嗎?', limit: '' },
      { name: '需要我為您尋找合適的people嗎?', limit: '' },
      { name: '需要我為您介紹一些可靠的people嗎?', limit: '' },
      { name: '需要我幫您找people嗎?', limit: '' },
    ],
    // 介紹人在幫忙找賣家的對話
    introducerBuySalesTalking: [
      { name: '我來幫忙介紹賣家吧。', limit: '' },
      { name: '我知道人有在賣order，我來幫您介紹一下', limit: '' },
      { name: '我可以幫您找到賣家，他們有賣order。', limit: '' },
      { name: '我知道有賣order的人，我來為您找一下。', limit: '' },
      { name: '我會找到賣order的人給您。', limit: '' },
      { name: '我知道有人賣order，我來為您聯繫。', limit: '' },
      { name: '我會找到order的人，稍等我一下。', limit: '' },
      { name: '我知道哪裡有賣order的人，我來為您介紹吧。', limit: '' },
      { name: '我會找到賣order的人，我來為您介紹。', limit: '' },
    ],
    // 黑市商人賣貨的對話
    blackMarketeerSellSalesTalking: [
      { name: '這裡有count貫order，一共是money両。myName有興趣嗎?', limit: '' },
      {
        name: '我這邊有count貫order，共計是money両。myName要的話賣你?',
        limit: '',
      },
      {
        name: '我剛進貨的order有count貫，一共是money両。myName要不要買?',
        limit: '',
      },
      {
        name: 'myName，我這批order有count貫，總共是money両。怎麼樣?',
        limit: '',
      },
      { name: '這些order有count貫，一共是money両。myName有需要嗎?', limit: '' },
      {
        name: '我這裡有count貫order，共計是money両。myName要買回去嗎?',
        limit: '',
      },
      {
        name: '我這裡有一些order總共有count貫，一共是money両。myName要買嗎?',
        limit: '',
      },
      { name: 'myName，這些order有count貫，共計是money両。如何?', limit: '' },
      {
        name: '最近批的order有count貫，一共是money両。myName要不要考慮一下?',
        limit: '',
      },
    ],
    // 黑市商人賣貨成功的對話
    blackMarketeerSellSalesOKTalking: [
      { name: 'myName，你這次算是撿了便宜，下次可不會這麼容易了。', limit: '' },
      { name: 'myName，希望你拿著這個東西能夠值回票價', limit: '' },
      { name: '你真是個會做生意的人，我喜歡和你這樣的客戶交易。', limit: '' },
      {
        name: '這可是最後一批了，別讓其他人知道我給你了這麼好的價格。',
        limit: '',
      },
      {
        name: 'myName，這次的交易算是互惠互利，希望我們今後還能有更多合作。',
        limit: '',
      },
      { name: '你能買到這批貨真是幸運，我可不會輕易把它交給別人。', limit: '' },
      { name: 'myName，希望我們以後能夠更順利地合作。', limit: '' },
      { name: 'myName，你是個精明的生意人，能和你合作是我的榮幸。', limit: '' },
    ],
    // 黑市商人賣貨失敗的對話
    blackMarketeerSellSalesNoTalking: [
      { name: 'myName，你在浪費我時間...', limit: '' },
      { name: 'myName，我已經給了你最好的價格...', limit: '' },
      { name: '我的貨物可不是給隨便什麼人的...', limit: '' },
      { name: '我可不會再等你了，如果你不能買，別人會的...', limit: '' },
      {
        name: 'myName，別以為你是唯一想要這個貨物的人，你不買我就賣給別人了...',
        limit: '',
      },
      { name: '不買就趕緊走吧，別浪費我的時間...', limit: '' },
      { name: 'myName，你要是買不起就別硬湊熱鬧...', limit: '' },
      { name: 'myName，我可沒有時間跟你耗...', limit: '' },
    ],
    // 木工建設確認中對話
    woodWorkBuildCheckTalking: [
      { name: '您要build嗎？交給我來完成，money両就好。', limit: '' },
      { name: '老板，我會為你build，money両可以嗎。', limit: '' },
      { name: 'build嗎？這是我的專長，money両可以接受嗎。', limit: '' },
      { name: '想要build嗎？交給我來搞定，只需要money両就可以了。', limit: '' },
    ],
    // 木工建設確認OK對話
    woodWorkBuildOkTalking: [
      { name: '老板，請等候約day天，就放心交給我吧!', limit: '' },
      { name: '靜候佳音，請等候約day天，我會用心為你為你建造的!', limit: '' },
      { name: '等候約day天後完工的消息吧，我將為您用心建造。', limit: '' },
      {
        name: '即將開始建造，預計約day天能完成，老板等候我的好消息吧!',
        limit: '',
      },
    ],
    // 木工建設確認No對話
    woodWorkBuildNoTalking: [
      { name: '這是在浪費我時間吧...', limit: '' },
      { name: '確定不再考慮考慮嗎...', limit: '' },
    ],
    // 木工建設完成對話
    woodWorkBuildEndTalking: [
      { name: '老板，終於您的build完成了!', limit: '' },
      { name: '這是您訂製的build，請過目。', limit: '' },
      { name: '您的build已經建好了，試試看。', limit: '' },
      { name: '老闆，您的build已經準備就緒。', limit: '' },
      { name: '這是您要求的build，看看滿意嗎？', limit: '' },
      { name: '老板，您的build已經完工。', limit: '' },
      { name: '這是您的build，希望能滿足您的需求。', limit: '' },
      { name: '這是您訂製的build，請過目。', limit: '' },
      { name: '我們已經完成了您的build，請驗收。', limit: '' },
    ],
    // 木工建設完成收到禮金對話
    woodWorkBuildEndTakeMoneyTalking: [
      { name: '謝謝老板，你真大方!', limit: '' },
      { name: '感謝您的賞賜，老板！', limit: '' },
      { name: '您的厚禮，感激不盡！', limit: '' },
      { name: '您的大恩大德，我會銘記在心！', limit: '' },
      { name: '老板您過於謙虛了，我只是盡一分心力而已！', limit: '' },
      { name: '老板您的慷慨令我感動不已！', limit: '' },
      { name: '您的好意，我感受到了！', limit: '' },
      { name: '再次感謝您的大力支持！', limit: '' },
      { name: '老板您的厚愛，感激不盡！', limit: '' },
    ],
  }),
  actions: {
    getCheckMoneyTalking(value = 666) {
      const randomIndex = Math.floor(
        Math.random() * this.checkMoneyTalking.length
      );
      const randomItem = this.checkMoneyTalking[randomIndex];
      return randomItem.name.replace('money', value);
    },
    getHireOKTalking() {
      const randomIndex = Math.floor(Math.random() * this.hireOK.length);
      const randomItem = this.hireOK[randomIndex];
      return randomItem.name;
    },
    getMeetStaffTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.meetStaffTalking.length
      );
      const randomItem = this.meetStaffTalking[randomIndex];
      return randomItem.name;
    },
    getTipTalking() {
      const randomIndex = Math.floor(Math.random() * this.tipTalking.length);
      const randomItem = this.tipTalking[randomIndex];
      return randomItem.name;
    },
    getAddPayTalking() {
      const randomIndex = Math.floor(Math.random() * this.addPayTalking.length);
      const randomItem = this.addPayTalking[randomIndex];
      return randomItem.name;
    },
    getPreFireTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.preFireTalking.length
      );
      const randomItem = this.preFireTalking[randomIndex];
      return randomItem.name;
    },
    getYesFireTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.yesFireTalking.length
      );
      const randomItem = this.yesFireTalking[randomIndex];
      return randomItem.name;
    },
    getNoFireTalking() {
      const randomIndex = Math.floor(Math.random() * this.noFireTalking.length);
      const randomItem = this.noFireTalking[randomIndex];
      return randomItem.name;
    },
    getUpShopkeeperTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.upShopkeeperTalking.length
      );
      const randomItem = this.upShopkeeperTalking[randomIndex];
      return randomItem.name;
    },
    getIntroducerHelpHireTalking(value) {
      const randomIndex = Math.floor(
        Math.random() * this.introducerHelpHireTalking.length
      );
      const randomItem = this.introducerHelpHireTalking[randomIndex];
      return randomItem.name.replace('people', value);
    },
    getIntroducerBuySalesTalking(value) {
      const randomIndex = Math.floor(
        Math.random() * this.introducerBuySalesTalking.length
      );
      const randomItem = this.introducerBuySalesTalking[randomIndex];
      return randomItem.name.replace('order', value);
    },
    getBlackMarketeerSellSalesTalking(count, order, money) {
      const randomIndex = Math.floor(
        Math.random() * this.blackMarketeerSellSalesTalking.length
      );
      const randomItem = this.blackMarketeerSellSalesTalking[randomIndex];
      return randomItem.name
        .replace('count', count)
        .replace('order', order)
        .replace('money', money)
        .replace('myName', config().name);
    },
    getBlackMarketeerSellSalesOKTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.blackMarketeerSellSalesOKTalking.length
      );
      const randomItem = this.blackMarketeerSellSalesOKTalking[randomIndex];
      return randomItem.name.replace('myName', config().name);
    },
    getBlackMarketeerSellSalesNoTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.blackMarketeerSellSalesNoTalking.length
      );
      const randomItem = this.blackMarketeerSellSalesNoTalking[randomIndex];
      return randomItem.name.replace('myName', config().name);
    },
    getWoodWorkBuildCheckTalking(build, money) {
      const randomIndex = Math.floor(
        Math.random() * this.woodWorkBuildCheckTalking.length
      );
      const randomItem = this.woodWorkBuildCheckTalking[randomIndex];
      return randomItem.name.replace('build', build).replace('money', money);
    },
    getWoodWorkBuildOkTalking(day) {
      const randomIndex = Math.floor(
        Math.random() * this.woodWorkBuildOkTalking.length
      );
      const randomItem = this.woodWorkBuildOkTalking[randomIndex];
      return randomItem.name.replace('day', day);
    },
    getWoodWorkBuildNoTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.woodWorkBuildNoTalking.length
      );
      const randomItem = this.woodWorkBuildNoTalking[randomIndex];
      return randomItem.name;
    },
    getWoodWorkBuildEndTalking(build) {
      const randomIndex = Math.floor(
        Math.random() * this.woodWorkBuildEndTalking.length
      );
      const randomItem = this.woodWorkBuildEndTalking[randomIndex];
      return randomItem.name.replace('build', build);
    },
    getWoodWorkBuildEndTakeMoneyTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.woodWorkBuildEndTakeMoneyTalking.length
      );
      const randomItem = this.woodWorkBuildEndTakeMoneyTalking[randomIndex];
      return randomItem.name;
    },
  },
});
