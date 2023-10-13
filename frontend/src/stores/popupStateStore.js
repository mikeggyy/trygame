// import { popupState } from '@/stores';
import { defineStore } from 'pinia'

//視窗狀態
export const popupState = defineStore({
  id: 'popupState',
  state: () => ({
    // 開新遊戲
    newGame: false,
    // 換名字
    changeName: false,
    // 雇用類型
    hireStatus: '',
  }),
  actions: {
    setNewGame(value) {
      this.newGame = value;
    },
    setChangeName(value) {
      this.changeName = value;
    },
    setHireStatus(value) {
      this.hireStatus = value;
    },
    closeAllPopups() {
      const keys = Object.keys(this.$state); // 获取所有状态属性的键
      keys.forEach((key) => {
        if (key !== 'id') { // 排除掉可能的特殊属性，比如 'id'
          this[key] = false; // 将属性设为 false
        }
      });
    }
  },
});