import { defineStore } from 'pinia'
export const select = defineStore({
  id: 'select',
  state: () => ({
    // 雇用選項
    hireSelect: [
      { name: '決定僱用', value: 'hireOK' },
      { name: '詢問薪資', value: 'checkMoney' },
      { name: '打聽此人評價', value: 'reviews' },
    ],
    // 傳喚選項
    meetSelect: [
      { name: '升大掌櫃', value: '升大掌櫃', limit: '掌櫃' },
      { name: '升掌櫃', value: '升掌櫃', limit: '雜工' },
      { name: '讓他出海', value: '讓他出海', limit: '船長' },
      { name: '幫忙走私', value: '幫忙走私', limit: '船長' },
      { name: '暗殺競爭對手', value: '暗殺競爭對手', limit: '保鑣' },
      { name: '販賣走私', value: '販賣走私', limit: '介紹人' },
      { name: '給小費', value: '給小費', limit: null },
      { name: '加薪', value: '加薪', limit: null },
      { name: '讓他去旅行', value: '讓他去旅行', limit: null },
      { name: '解雇', value: '解雇', limit: null },
    ],
    // 幕府重臣
    shogunPositionSelect: [
      { name: '老中', value: '老中' },
      { name: '若年寄', value: '若年寄' },
      { name: '大目付', value: '大目付' },
      { name: '留守居役', value: '留守居役' },
      { name: '側用人', value: '側用人' },
      { name: '勘定吟味役', value: '勘定吟味役' },
      { name: '勘定奉行', value: '勘定奉行' },
      { name: '作事奉行', value: '作事奉行' },
      { name: '寺社奉行', value: '寺社奉行' },
      { name: '北町奉行', value: '北町奉行' },
      { name: '南町奉行', value: '南町奉行' },
      { name: '火附盜賊改', value: '火附盜賊改' },
      { name: '世話役', value: '世話役' },
    ],
    // 拜訪官員前的準備
    preMeetOfficialSelect: [
      { name: '出門拜訪', value: '出門拜訪' },
      { name: '決定禮物', value: '決定禮物', limit: '沒禮物' },
      { name: '確認禮物', value: '確認禮物', limit: '有禮物' },
    ],
    // 禮物
    giftSelect: [
      { name: '淺草饅頭', value: '淺草饅頭' },
      { name: '雷粔糖', value: '雷粔糖' },
      { name: '芋頭羊羹', value: '芋頭羊羹' },
      { name: '淺草人形燒', value: '淺草人形燒' },
    ],
    // 會見將軍時的選項
    meetShogunSelect: [
      { name: '給介紹信', value: '給介紹信', limit: '給介紹信' },
      { name: '問事情', value: '問事情', limit: '問事情' },
      { name: '遞送禮物', value: '遞送禮物', limit: '遞送禮物' },
      { name: '提出捐贈', value: '提出捐贈', limit: '提出捐贈' },
      { name: '離開府邸', value: '離開府邸', limit: '離開府邸' },
    ],
  }),
  actions: {

  },
});