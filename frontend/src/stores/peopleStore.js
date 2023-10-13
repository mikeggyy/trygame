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
      axios.get('http://localhost:3000/api/generateAllData', {
        params: {
          laborerCount: laborerCount,
          bodyguardsCount: bodyguardsCount,
          shipManCount: shipManCount
        }
      }).then((response) => {
        this.peopleList = response.data;
      })
    },
  },
});