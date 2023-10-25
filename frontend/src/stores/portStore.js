import { defineStore } from 'pinia'
export const port = defineStore({
  id: 'port',
  state: () => ({
    portList: [
      { name: '界港', owner: '勘定奉行', status: '可交易' },
      { name: '仙台藩', owner: '仙台藩', status: '不可交易' },
      { name: '府中藩', owner: '府中藩', status: '不可交易' },
      { name: '鳥取藩', owner: '鳥取藩', status: '不可交易' },
      { name: '福岡藩', owner: '福岡藩', status: '不可交易' },
      { name: '長崎藩', owner: '長崎藩', status: '不可交易' },
      { name: '薩摩藩', owner: '薩摩藩', status: '不可交易' },
      { name: '岡山藩', owner: '岡山藩', status: '不可交易' },
      { name: '紀伊藩', owner: '勘定奉行', status: '不可交易' },
      { name: '石見藩', owner: '石見藩', status: '不可交易' },
      { name: '宇和島藩', owner: '宇和島藩', status: '不可交易' },
      { name: '長州藩', owner: '長州藩', status: '不可交易' },
      { name: '大名藩', owner: '大名藩', status: '不可交易' },
      { name: '江戶藩', owner: '勘定奉行', status: '不可交易' },
      { name: '近江藩', owner: '近江藩', status: '不可交易' },
      { name: '甲府藩', owner: '甲府藩', status: '不可交易' },
      { name: '小倉藩', owner: '小倉藩', status: '不可交易' },
      { name: '佐賀藩', owner: '佐賀藩', status: '不可交易' },
      { name: '熊本藩', owner: '熊本藩', status: '不可交易' },
      { name: '萩藩', owner: '萩藩', status: '不可交易' },
      { name: '福山藩', owner: '福山藩', status: '不可交易' },
    ]
  }),
  actions: {

  },
});