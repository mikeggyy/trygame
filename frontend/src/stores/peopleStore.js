// import { people } from '@/stores';
import { defineStore } from 'pinia';
import axios from 'axios';
// 人物列表
export const people = defineStore({
  id: 'people',
  state: () => ({
    // 角色清單
    peopleList: [],
  }),
  getters: {
    // 黑市商人
    blackMarketeerList(state) {
      return state.peopleList.filter((people) => people.type === '黑市商人');
    },
    // 可用木工 篩選掉建造中
    woodWorkManList(state) {
      return state.peopleList.filter(
        (people) => people.type === '木工' && people.status != '建造中'
      );
    },
  },
  actions: {
    /**
     * 获取創建角色列表并将数据存储到 `peopleList` 属性中。
     * @param {number} laborerCount - 雜工数量，默认值为 50。
     * @param {number} bodyguardsCount - 保镖数量，默认值为 50。
     * @param {number} shipManCount - 船员数量，默认值为 50。
     */
    getPeopleList(laborerCount = 50, bodyguardsCount = 50, shipManCount = 50) {
      axios
        .get(import.meta.env.VITE_APP_BASE_URL + '/api/generateAllData', {
          params: {
            laborerCount: laborerCount,
            bodyguardsCount: bodyguardsCount,
            shipManCount: shipManCount,
          },
        })
        .then((response) => {
          this.peopleList = response.data;
        });
    },
    removePeopleList(value) {
      this.peopleList = this.peopleList.filter(
        (person) => person.name !== value
      );
    },
    // 設定某人好感度
    setPeopleListHowMuchLike(name, value) {
      const peopleListIndex = this.peopleList.findIndex(
        (item) => item.name == name
      );
      if (this.peopleList[peopleListIndex].howMuchLike + value > 1000) {
        this.peopleList[peopleListIndex].howMuchLike = 1000
      } else if (this.peopleList[peopleListIndex].howMuchLike + value < 0) {
        this.peopleList[peopleListIndex].howMuchLike = 0
      } else {
        this.peopleList[peopleListIndex].howMuchLike =
          this.peopleList[peopleListIndex].howMuchLike + value;
      }
    },
    // 設定某人狀態
    setPeopleListStatus(name, value) {
      const peopleListIndex = this.peopleList.findIndex(
        (item) => item.name == name
      );
      this.peopleList[peopleListIndex].status = this.peopleList[
        peopleListIndex
      ].status = value;
    },
  },
});
