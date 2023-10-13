import { defineStore } from 'pinia'
export const port = defineStore({
  id: 'port',
  state: () => ({
    portList: [
      { name: '界港', owner: '幕府直轄' }
    ]
  }),
  actions: {

  },
});