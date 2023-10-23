import { config, people, popupState } from '@/stores';
export const toBuild = () => {
  // 建造項目
  const buildings = config().buildingList;
  // 建造物建造中
  if (buildings != '') {
    for (let i = 0; i < buildings.length; i++) {
      buildings[i].day = buildings[i].day - 1;
      if (buildings[i].day < 0) {
        let buildResult = (40 + buildings[i].buildAbility) / 100;

        switch (buildings[i].type) {
          case '建造船隻':
            // 當完工後改變木工狀態
            people().setPeopleListStatus(buildings[i].builder, '');
            // 改變目前建築狀態
            popupState().setBuildEndItem(buildings[i]);
            buildings.splice(i, 1);
            // 因为删除了一个元素，所以需要减少 i 的值
            i--;
            config().setTimeStart(false);
            break;
          case '建造庭院':
            people().setPeopleListStatus(buildings[i].builder, '');
            popupState().setBuildEndItem(buildings[i]);
            buildings.splice(i, 1);
            i--;
            config().setTimeStart(false);
            break;
          case '建造倉庫':
            people().setPeopleListStatus(buildings[i].builder, '');
            popupState().setBuildEndItem(buildings[i]);

            buildings.splice(i, 1);
            i--;
            config().setTimeStart(false);
            break;
        }
      }
    }
  }
};
