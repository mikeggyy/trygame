import { config } from '@/stores';

export const toWork = (num) => {
  const setDate = (days) => {
    config().setTimeStart(true)
    if (days > 0) {
      // 递增日期
      config().increaseDate(); // 假设你的 store 里有一个 increaseDate 函数用来递增日期
      // 等待0.5秒后递增下一天
      setTimeout(() => {
        setDate(days - 1);
      }, 50);
    } else {
      config().setTimeStart(false)
    }
  };
  // 开始递增日期
  setDate(num);
};