// import { popupState } from '@/stores';
import { defineStore } from 'pinia';

//視窗狀態
export const popupState = defineStore({
  id: 'popupState',
  state: () => ({
    // 開新遊戲
    newGame: false,
    // 換名字
    changeName: false,
    // 雇用類型
    hireType: '',
    // 傳喚視窗類型
    meetStaffType: '',
    // 選擇金額視窗
    choiceMoney: false,
    // 描述彈窗
    description: false,
    // 建造
    buildType: '',
    // 資金移動
    moveMoney: '',
    // 買入
    buySales: false,
    // 賣出
    sellSales: false,
    // 建造完成
    buildEndItem: '',
    // 幕府重臣的府邸
    shogun: false
  }),
  actions: {
    setNewGame(value) {
      this.newGame = value;
    },
    setChangeName(value) {
      this.changeName = value;
    },
    setHireType(value) {
      this.hireType = value;
    },
    setMeetStaffType(value) {
      this.meetStaffType = value;
    },
    setChoiceMoney(value) {
      this.choiceMoney = value;
    },
    setDescription(value) {
      this.description = value;
    },
    closeAllPopups() {
      const keys = Object.keys(this.$state); // 获取所有状态属性的键
      keys.forEach((key) => {
        if (key !== 'id') {
          // 排除掉可能的特殊属性，比如 'id'
          this[key] = false; // 将属性设为 false
        }
      });
    },
    setBuildType(value) {
      this.buildType = value;
    },
    setMoveMoney(value) {
      this.moveMoney = value;
    },
    setBuySales(value) {
      this.buySales = value;
    },
    setSellSales(value) {
      this.sellSales = value;
    },
    setBuildEndItem(item) {
      this.buildEndItem = item;
    },
    setShogun(value) {
      this.shogun = value;
    },
  },
});
