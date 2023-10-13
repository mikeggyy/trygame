import { defineStore } from 'pinia'

//導航列
export const navBar = defineStore({
  id: 'navBar',
  state: () => ({
    navList: [
      {
        name: '檔案',
        list: [
          { name: '儲存進度' },
          { name: '讀取進度' },
          { name: '新遊戲' },
        ]
      },
      {
        name: '情報',
        list: [
          // { name: '場景視窗' },
          // { name: '商店視窗' },
          { name: '人物表' },
          { name: '帳簿' },
        ]
      },
      {
        name: '行動',
        list: [
          {
            name: '工作',
            list2: [
              { name: '1日', fn: 'work', value: 1 },
              { name: '5日', fn: 'work', value: 5 },
              { name: '10日', fn: 'work', value: 10 },
              { name: '15日', fn: 'work', value: 15 },
              { name: '30日', fn: 'work', value: 30 },
              { name: '一年', fn: 'work', value: 365 },
              { name: '設定停止日', fn: 'work', value: 'stop' },
            ]
          },
          { name: '外出' },
          { name: '買入' },
          { name: '賣掉' },
          { name: '資金移動' },
          {
            name: '雇用員工',
            list2: [
              { name: '介紹人', fn: 'hire', value: 1 },
              { name: '雜工', fn: 'hire', value: 2 },
              { name: '保鑣', fn: 'hire', value: 3 },
              { name: '船長', fn: 'hire', value: 4 },
            ]
          },
          { name: '解雇員工' },
        ]
      },
      {
        name: '傳喚',
        list: [
          { name: '介紹人' },
          { name: '大掌櫃' },
          { name: '掌櫃' },
          { name: '雜工' },
          { name: '保鑣' },
          { name: '船長' },
          { name: '妻子' },
        ]
      },
      {
        name: '選項',
        list: [
          { name: '變更家紋' },
          { name: '變更名字' },
          { name: '變更店名' },
          { name: '變更船名' },
          { name: '設定音樂' },
          { name: '設定音效' },
        ]
      },
      // {
      //   name: '視窗',
      //   list: [
      //   ]
      // },

    ]
  }),
  actions: {

  },
});