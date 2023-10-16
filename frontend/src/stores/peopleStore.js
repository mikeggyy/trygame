// import { people } from '@/stores';
import { defineStore } from 'pinia'
import axios from 'axios'
// 人物列表
export const people = defineStore({
  id: 'people',
  state: () => ({
    // 角色清單
    peopleList: []
  }),
  actions: {
    /**
     * 获取創建角色列表并将数据存储到 `peopleList` 属性中。
     * @param {number} laborerCount - 雜工数量，默认值为 50。
     * @param {number} bodyguardsCount - 保镖数量，默认值为 50。
     * @param {number} shipManCount - 船员数量，默认值为 50。
     */
    getPeopleList(laborerCount = 50, bodyguardsCount = 50, shipManCount = 50) {
      axios.get(import.meta.env.VITE_APP_BASE_URL + '/api/generateAllData', {
        params: {
          laborerCount: laborerCount,
          bodyguardsCount: bodyguardsCount,
          shipManCount: shipManCount,
        }
      }).then((response) => {
        this.peopleList = response.data;
      })
    },
  },
});