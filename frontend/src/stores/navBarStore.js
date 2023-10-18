import { defineStore } from 'pinia'
import { ref } from 'vue';
import { config } from './configStore';
//導航列
export const navBar = defineStore({
  id: 'navBar',
  state: () => ({
    navList: [
      {
        name: '檔案',
        list: [
          { name: '儲存進度', show: true, fn: '儲存進度' },
          { name: '讀取進度', show: true, fn: '讀取進度' },
          { name: '新遊戲', show: true, fn: '新遊戲' },
        ]
      },
      {
        name: '情報',
        list: [
          // { name: '場景視窗' },
          // { name: '商店視窗' },
          { name: '人物表', show: true },
          { name: '帳簿', show: true },
        ]
      },
      {
        name: '行動',
        list: [
          {
            name: '工作',
            list2: [
              { name: '1日', fn: '工作', value: 1, show: true },
              { name: '5日', fn: '工作', value: 5, show: true },
              { name: '10日', fn: '工作', value: 10, show: true },
              { name: '15日', fn: '工作', value: 15, show: true },
              { name: '30日', fn: '工作', value: 30, show: true },
              { name: '60日', fn: '工作', value: 60, show: true },
              { name: '一年', fn: '工作', value: 365, show: true },
              { name: '設定停止日', fn: '工作', value: 'setStop', show: true },
            ]
          },
          { name: '外出', show: true },
          { name: '買入', show: true },
          { name: '賣掉', show: true },
          { name: '資金移動', show: true },
          {
            name: '雇用員工',
            list2: [
              { name: '介紹人', fn: '雇用員工', value: 1, show: true },
              { name: '雜工', fn: '雇用員工', value: 2, show: true },
              { name: '保鑣', fn: '雇用員工', value: 3, show: true },
              { name: '船長', fn: '雇用員工', value: 4, show: true },
            ]
          },
          // { name: '解雇員工' },
        ]
      },
      {
        name: '傳喚',
        list: [
          { name: '介紹人', show: true, fn: '傳喚' },
          { name: '大掌櫃', show: true, fn: '傳喚' },
          { name: '掌櫃', show: true, fn: '傳喚' },
          { name: '雜工', show: true, fn: '傳喚' },
          { name: '保鑣', show: true, fn: '傳喚' },
          { name: '船長', show: true, fn: '傳喚' },
          { name: '妻子', show: true, fn: '傳喚' },
        ]
      },
      {
        name: '選項',
        list: [
          // { name: '變更家紋', show: true },
          { name: '變更名字', show: true },
          // { name: '變更店名', show: true },
          { name: '變更船名', show: true },
          { name: '音樂開關', show: true },
          { name: '音效開關', show: true },
        ]
      },
      // {
      //   name: '視窗',
      //   list: [
      //   ]
      // },

    ]
  }),
  getters: {

  },
  actions: {

  },
});