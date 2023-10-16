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
      { name: '謝謝啦,不會讓你失望的。' },
      { name: '我必定竭盡所能，不負您的期望。' },
      { name: '請放心，我必定不辜負您的期待。' },
      { name: '謝謝您的信任，我會努力工作，不負您的期望。' },
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
  },
});