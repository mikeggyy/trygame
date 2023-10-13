// import { people } from '@/stores';
import { defineStore } from 'pinia'
import axios from 'axios'
// 人物列表
export const people = defineStore({
  id: 'people',
  state: () => ({
    // 介紹人
    peopleList: []
  }),
  actions: {
    // 創建雜工
    getPeopleList(laborerCount, bodyguardsCount, shipManCount) {
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