import { defineStore } from 'pinia'

export const talking = defineStore({
  id: 'talking',
  state: () => ({
    // 確認薪資對話
    checkMoneyTalking: [
      { name: '我一個月只要money兩就可以。' },
      { name: '一個月money兩可以接受嗎..' },
      { name: '一個月money兩就行了!' },
      { name: '一個月money兩,很划算吧。' },
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
    ]
  }),
  actions: {
    getCheckMoneyTalking(value = 666) {
      const randomIndex = Math.floor(Math.random() * this.checkMoneyTalking.length);
      const randomItem = this.checkMoneyTalking[randomIndex];
      return randomItem.name.replace('money', value);
    },
    getHireOKTalking() {
      const randomIndex = Math.floor(Math.random() * this.hireOK.length);
      const randomItem = this.hireOK[randomIndex];
      return randomItem.name
    },
    getMeetStaffTalking() {
      const randomIndex = Math.floor(Math.random() * this.meetStaffTalking.length);
      const randomItem = this.meetStaffTalking[randomIndex];
      return randomItem.name
    },
    getTipTalking() {
      const randomIndex = Math.floor(Math.random() * this.tipTalking.length);
      const randomItem = this.tipTalking[randomIndex];
      return randomItem.name
    },
    getAddPayTalking() {
      const randomIndex = Math.floor(Math.random() * this.addPayTalking.length);
      const randomItem = this.addPayTalking[randomIndex];
      return randomItem.name
    },
    getPreFireTalking() {
      const randomIndex = Math.floor(Math.random() * this.preFireTalking.length);
      const randomItem = this.preFireTalking[randomIndex];
      return randomItem.name
    },
    getYesFireTalking() {
      const randomIndex = Math.floor(Math.random() * this.yesFireTalking.length);
      const randomItem = this.yesFireTalking[randomIndex];
      return randomItem.name
    },
    getNoFireTalking() {
      const randomIndex = Math.floor(Math.random() * this.noFireTalking.length);
      const randomItem = this.noFireTalking[randomIndex];
      return randomItem.name
    },
    getUpShopkeeperTalking() {
      const randomIndex = Math.floor(Math.random() * this.upShopkeeperTalking.length);
      const randomItem = this.upShopkeeperTalking[randomIndex];
      return randomItem.name
    },

  },
});