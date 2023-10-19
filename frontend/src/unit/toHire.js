// import { toHire } from '@/unit/toHire.js';
import { config, popupState, people } from '@/stores';

// 選中招募類型
export const toHire = (item) => {
  popupState().setHireType(item);
};

// 介紹人推薦對象
export const introducerPush = (value = "雜工") => {
  const ability = config().introducerItem.ability;
  // 定義一個遞迴函數來尋找符合條件的員工
  const findEmployee = (minAbility) => {
    const randomAbility = Math.floor(Math.random() * 15) + minAbility;
    let peopleItem = people().peopleList.find(employee => employee.type === value && employee.ability <= randomAbility + 10 && employee.ability >= randomAbility);
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
