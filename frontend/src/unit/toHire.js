// import {  } from '@/unit/toHire.js';
import { config, people } from '@/stores';

// 介紹人推薦對象
export const introducerPush = (value = "雜工") => {
  const ability = config().introducerItem.ability;
  // 定義一個遞迴函數來尋找符合條件的員工
  const findEmployee = (minAbility) => {
    const randomAbility = Math.floor(Math.random() * 15) + minAbility;
    let peopleItem = people().peopleList.find(item => item.type === value && item.ability <= randomAbility + 10 && item.ability >= randomAbility && item.status !='建造中');
    // 如果找不到符合條件的員工且 minAbility 大於等於 0，繼續嘗試減少 minAbility 並進行下一次查找
    if (!peopleItem && minAbility >= 0) {
      return findEmployee(minAbility - 10);
    }
    // 返回找到的員工或 null（如果找不到符合條件的員工）
    return peopleItem;
  };
  // 呼叫遞迴函數開始尋找
  let result = findEmployee(ability);
  return result;

};
