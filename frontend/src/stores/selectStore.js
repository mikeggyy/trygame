import { defineStore } from 'pinia'
export const select = defineStore({
  id: 'select',
  state: () => ({
    hireSelect: [
      { name: '決定僱用', value: 'hireOK' },
      { name: '詢問薪資', value: 'checkMoney' },
      { name: '打聽此人評價', value: 'reviews' },
    ]
  }),
  actions: {

  },
});