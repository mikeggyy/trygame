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
    ],
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
  },
});