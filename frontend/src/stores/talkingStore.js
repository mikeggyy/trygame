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
    // 黑市商人買貨的對話
    blackMarketeerBuySalesTalking: [
      { name: '跟你買count貫order，總共money両。myName你接受嗎?', limit: '' },
      {
        name: '聽說你有count貫order，算你money両。myName可以的話賣我?',
        limit: '',
      },
      {
        name: '聽說你這邊order有count貫，一共money両跟你收。myName要不要賣?',
        limit: '',
      },
      {
        name: 'myName，聽說你有批order有count貫，money両賣我。怎麼樣?',
        limit: '',
      },
      { name: '這些order一共有count貫，money両我買了。myName如何?', limit: '' },
      {
        name: 'count貫order，money両跟你收。myName要賣給我嗎?',
        limit: '',
      },
      {
        name: '聽說你這裡有一些order總共有count貫，money両跟你收。myName要賣嗎?',
        limit: '',
      },
      { name: 'myName，這些order有count貫，money両跟你收購。如何?', limit: '' },
      {
        name: '聽說你有order共count貫，money両賣我如何。myName怎麼樣?',
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
    // 木工船隻建設完成要求取名
    woodWorkBuildEndShipTalking: [
      { name: '您的船隻已經完成了，幫船取個你喜歡的名字吧', limit: '' },
      { name: '這是您訂製的船隻，幫船取個你喜歡的名字吧', limit: '' },
    ],
    // 船隻取名完後木工對話
    woodWorkBuildEndGiveNameTalking: [
      { name: '叫「shipName」嗎，真是個好名字！', limit: '' },
      { name: '叫「shipName」嗎？這個名字真是獨特！', limit: '' },
      { name: '哇，「shipName」，好名字！', limit: '' },
      { name: '「shipName」，這個名字好適合這艘船！', limit: '' },
    ],
    // 介紹人幫忙寫介紹信
    introducerHelpsWriteTheLetterTalking: [
      { name: '是否需要我為您寫一封介紹信呢？', limit: '' },
      { name: '是否需要我為您準備一封介紹信？', limit: '' },
      { name: '我可以為您起草一封介紹信，這樣您就可以順利進行拜訪。', limit: '' },
      { name: '如果您希望，我可以替您寫一份介紹信。', limit: '' },
      { name: '是否需要我協助您準備一份正式的介紹信？', limit: '' },
      { name: '如果您同意，我可以為您撰寫一封精心製作的介紹信。', limit: '' },
      { name: '一封介紹信可能會為您的拜訪增添更多的價值。您希望我幫您寫嗎？', limit: '' },
      { name: '我很樂意為您寫一封介紹信，以確保您的拜訪能夠順利進行。您認為需要這樣的協助嗎？', limit: '' },
    ],
    // 答應介紹人幫忙寫介紹信
    introducerHelpsWriteTheLetterYesTalking: [
      { name: '我將立即為您準備一封得體的介紹信，相信這將對您的拜訪非常有幫助。', limit: '' },
      { name: '我將以最好的方式為您寫一封介紹信，讓您的拜訪充滿誠意和尊重。', limit: '' },
      { name: '一封精心製作的介紹信將為您的拜訪增色不少。我將竭盡所能為您提供最好的幫助。', limit: '' },
      { name: '這封介紹信將展現您的誠意，相信將軍一定會對您的拜訪印象深刻。', limit: '' },
      { name: '請放心，我將確保這封介紹信既表達了您的誠意，讓您的拜訪順利進行。', limit: '' },
      { name: '我將為您寫一封既正式又親切的介紹信，這將是您拜訪將軍時的得力助手。', limit: '' },
      { name: '我將為您設計一封引人注目的介紹信，相信這將是個好的開端。', limit: '' },
      { name: '我很樂意為您寫一封介紹信，以確保您的拜訪能夠順利進行。您認為需要這樣的協助嗎？', limit: '' },
    ],
    // 將軍剛見面會對我說的話
    meetShogunTalking: [
      { name: 'myName。歡迎來到我的府邸。', limit: '' },
      { name: '哦，myName，有什麼要談的嗎。', limit: '' },
      { name: 'myName，你有什麼想談的嗎？', limit: '' },
      { name: '好，myName，你說吧，我聽著。', limit: '' },
      { name: 'myName，你有什麼想談的嗎？', limit: '' },
    ],
    // 將軍收到介紹信後對我說的話
    shogunTakeLetterTalking: [
      { name: '哦，是介紹信上的那位introducerName介紹你來的嗎？', limit: '' },
      { name: '這信上introducerName可是大加讚賞你，不知你來意何為？', limit: '' },
      { name: '我收到了你的介紹信，看來你是個不簡單的人物。', limit: '' },
      { name: 'introducerName介紹信上說你有趣，但我對你的興趣還未開始。', limit: '' },
    ],
    // 將軍問事情
    shogunAskSomeThingTalking: [
      { name: '出人頭地可真不容易呢，總是要克服各種困難。', limit: '' },
      { name: '每個人都想往上爬啊？可惜路總是艱辛的。', limit: '' },
      { name: '在這個時代，競爭非常激烈，不是嗎？', limit: '' },
      { name: '你們的世界真是複雜，不像我，只需操心國家大事。', limit: '' },
      { name: '我也曾經夢想過成功，但向上的道路同樣充滿挑戰。', limit: '' },
      { name: '有時候，我也想遠離塵囂，過個平靜的生活。', limit: '' },
      { name: '大家都是為了更好的生活努力。', limit: '' },
      { name: '但願我們的努力都能換來理想的結果。', limit: '' },
      { name: '在這個時代，每個人都在為了夢想而努力。', limit: '' },
    ],
    // 將軍拒絕收禮物
    shogunRejectGiftTalking: [
      { name: '這是gift吧，但我不能收啊，這份心意我心領了。', limit: '' },
      { name: '這gift太珍貴了，我不敢接受。但感謝你的心意。', limit: '' },
      { name: '這gift可是您的一番心意，我實在難以收下。', limit: '' },
      { name: '雖然我不能收下這份gift，但您的誠意我感受到了。', limit: '' },
      { name: '這份gift，我不敢收。但您的厚意我心領了。', limit: '' },
      { name: '我不能接受這份gift，但您的心意我心領了。', limit: '' },
      { name: '這份gift太過於奢華，我無法收下。但您的心意我非常感激。', limit: '' },
      { name: '這gift我不忍心收下。但您的心意我知道了。', limit: '' },
      { name: '我不能接受這份gift，但您的誠意我永遠記在心裡。', limit: '' },
      { name: '這份gift我實在難以收下，但謝謝您的慷慨。', limit: '' },
    ],
    // 將軍收禮物
    shogunAcceptGiftTalking: [
      { name: 'myName，謝謝你啦，魚幫水水幫魚。', limit: '' },
      { name: 'myName，你的誠意感動了我，我決定收下這份禮物。', limit: '' },
      { name: 'myName，我明白了，我決定接受你的心意。', limit: '' },
      { name: 'myName，這禮物，我收下了。', limit: '' },
      { name: 'myName，我很感激你的心意，我接受了。', limit: '' },
      { name: 'myName，你的堅持讓我改變了主意，我收下了。', limit: '' },
      { name: 'myName，我不想讓你難過，我會收下這份禮物。', limit: '' },
      { name: 'myName，你的禮物真誠摯，我決定接受。', limit: '' },
      { name: '好吧，myName，既然你這麼誠心，我就收下了。', limit: '' },
    ],
    // 對將軍提出捐贈
    shogunMakeDonatTalking: [
      { name: '哦，myName你願意捐贈嗎？那麼，你打算捐贈多少呢？', limit: '' },
      { name: 'myName你真是慷慨。請問你計劃捐贈多少呢？', limit: '' },
      { name: '嗯，我對你的慷慨深感欣賞。你的捐贈金額是？', limit: '' },
      { name: '真是一位令人敬佩的人。請問，你要捐贈多少呢？', limit: '' },
      { name: '你的慷慨令我感動。請問，你打算捐贈多少呢？', limit: '' }
    ],
    // 將軍收到捐贈
    shogunGetDonatTalking: [
      { name: '噢，我接受了你的慷慨捐贈。myName你的支持將有助於我們的使命。', limit: '' },
      { name: '謝謝myName你的支持，這筆捐贈將用於國家的發展。', limit: '' },
      { name: '收到你的捐贈了，myName你的慷慨令人感動。', limit: '' },
      { name: 'myName你的贈是對國家的重大貢獻，我感到非常幸運。', limit: '' },
      { name: '我們將以你的名義紀念這份慷慨。myName感謝你的支持。', limit: '' },
      { name: '這份捐贈將幫助我們實現許多重要的計劃。myName謝謝你的支持與信任。', limit: '' },
      { name: '你的慷慨將被永遠銘記在我們的心中。myName謝謝你的捐贈。', limit: '' },
      { name: '你的慷慨將促使我們取得更大的成就。myName謝謝你的貢獻。', limit: '' },
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
    getBlackMarketeerBuySalesTalking(count, order, money) {
      const randomIndex = Math.floor(
        Math.random() * this.blackMarketeerBuySalesTalking.length
      );
      const randomItem = this.blackMarketeerBuySalesTalking[randomIndex];
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
    getWoodWorkBuildEndShipTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.woodWorkBuildEndShipTalking.length
      );
      const randomItem = this.woodWorkBuildEndShipTalking[randomIndex];
      return randomItem.name;
    },
    getWoodWorkBuildEndGiveNameTalking(shipName) {
      const randomIndex = Math.floor(
        Math.random() * this.woodWorkBuildEndGiveNameTalking.length
      );
      const randomItem = this.woodWorkBuildEndGiveNameTalking[randomIndex];
      return randomItem.name.replace('shipName', shipName);
    },
    getIntroducerHelpsWriteTheLetterTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.introducerHelpsWriteTheLetterTalking.length
      );
      const randomItem = this.introducerHelpsWriteTheLetterTalking[randomIndex];
      return randomItem.name;
    },
    getIntroducerHelpsWriteTheLetterYesTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.introducerHelpsWriteTheLetterYesTalking.length
      );
      const randomItem = this.introducerHelpsWriteTheLetterYesTalking[randomIndex];
      return randomItem.name;
    },
    getMeetShogunTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.meetShogunTalking.length
      );
      const randomItem = this.meetShogunTalking[randomIndex];
      return randomItem.name.replace('myName', config().name);
    },
    getShogunTakeLetterTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.shogunTakeLetterTalking.length
      );
      const randomItem = this.shogunTakeLetterTalking[randomIndex];
      return randomItem.name.replace('introducerName', config().introducerItem.name);
    },
    getShogunAskSomeThingTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.shogunAskSomeThingTalking.length
      );
      const randomItem = this.shogunAskSomeThingTalking[randomIndex];
      return randomItem.name
    },
    getShogunRejectGiftTalking(gift) {
      const randomIndex = Math.floor(
        Math.random() * this.shogunRejectGiftTalking.length
      );
      const randomItem = this.shogunRejectGiftTalking[randomIndex];
      return randomItem.name.replace('gift', gift);
    },
    getShogunAcceptGiftTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.shogunAcceptGiftTalking.length
      );
      const randomItem = this.shogunAcceptGiftTalking[randomIndex];
      return randomItem.name.replace('myName', config().name);;
    },
    getShogunMakeDonatTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.shogunMakeDonatTalking.length
      );
      const randomItem = this.shogunMakeDonatTalking[randomIndex];
      return randomItem.name.replace('myName', config().name);;
    },
    getShogunGetDonatTalking() {
      const randomIndex = Math.floor(
        Math.random() * this.shogunGetDonatTalking.length
      );
      const randomItem = this.shogunGetDonatTalking[randomIndex];
      return randomItem.name.replace('myName', config().name);;
    },

  },
});
