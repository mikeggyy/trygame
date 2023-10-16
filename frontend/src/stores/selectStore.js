import { defineStore } from 'pinia'
export const select = defineStore({
  id: 'select',
  state: () => ({
    hireSelect: [
      { name: '決定僱用', value: 'hireOK' },
      { name: '詢問薪資', value: 'checkMoney' },
      { name: '打聽此人評價', value: 'reviews' },
    ],
    meetSelect: [
      { name: '升大掌櫃', value: '升大掌櫃',limit:'掌櫃' },
      { name: '升掌櫃', value: '升掌櫃',limit:'雜工' },
      { name: '讓他出海', value: '讓他出海',limit:'船長' },
      { name: '幫忙走私', value: '幫忙走私',limit:'船長' },
      { name: '暗殺競爭對手', value: '暗殺競爭對手',limit:'保鑣' },
      { name: '販賣走私', value: '販賣走私',limit:'介紹人' },
      { name: '給小費', value: '給小費' },
      { name: '加薪', value: '加薪' },
      { name: '讓他去旅行', value: '讓他去旅行' },
      { name: '解雇', value: '解雇' },
    ],
  }),
  actions: {

  },
});