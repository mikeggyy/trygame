import { config } from '@/stores';
import { toBuild } from '@/unit/toBuild.js';
export const toWork = (num) => {
  let timeoutId; // 用于保存setTimeout返回的ID
  const setDate = (days) => {
    config().setTimeStart(true);
    if (days > 0) {
      // 建造事件
      toBuild();
      // 递增日期
      config().increaseDate();
      if (config().isTimeStart == false) {
        clearTimeout(timeoutId);
        return;
      }
      // 時間到之後增加天數
      timeoutId = setTimeout(() => {
        setDate(days - 1);
      }, 100);
    } else {
      config().setTimeStart(false);
    }
  };
  // 开始递增日期
  setDate(num);
};
