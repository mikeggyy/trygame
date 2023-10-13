import { defineStore } from 'pinia'

//職業
export const profession = defineStore({
  id: 'profession',
  state: () => ({
    professionlist: [
      {
        name: '海產行',
        commodityList: [
          { name: '鯛魚', value: 0, orderId: 1 },
          { name: '鮪魚', value: 0, orderId: 2 },
          { name: '鯖魚', value: 0, orderId: 3 },
          { name: '蛤蜊', value: 0, orderId: 4 },
          { name: '扇貝', value: 0, orderId: 5 },
          { name: '牡蠣', value: 0, orderId: 6 },
          { name: '魚翅', value: 0, orderId: 7 },
          { name: '海參', value: 0, orderId: 8 },
          { name: '海帶', value: 0, orderId: 9 },
          { name: '昆布', value: 0, orderId: 10 },
          { name: '魚乾', value: 0, orderId: 11 },
          { name: '魚醬', value: 0, orderId: 12 },
        ]
      },
      {
        name: '雜貨行',
        commodityList: [
          { name: '酱油', value: 0, orderId: 13 },
          { name: '醋', value: 0, orderId: 14 },
          { name: '味噌', value: 0, orderId: 15 },
          { name: '糖', value: 0, orderId: 16 },
          { name: '鹽', value: 0, orderId: 17 },
          { name: '米', value: 0, orderId: 18 },
          { name: '大豆醬', value: 0, orderId: 19 },
          { name: '蕎麥麵', value: 0, orderId: 20 },
          { name: '茶', value: 0, orderId: 21 },
          { name: '海苔', value: 0, orderId: 22 },
          { name: '芥末', value: 0, orderId: 23 },
          { name: '柴魚', value: 0, orderId: 24 }
        ]
      },
      {
        name: '米行',
        commodityList: [
          { name: '糙米', value: 0, orderId: 25 },
          { name: '白米', value: 0, orderId: 26 },
          { name: '玄米', value: 0, orderId: 27 },
          { name: '小米', value: 0, orderId: 28 },
          { name: '糯米', value: 0, orderId: 29 },
          { name: '黑米', value: 0, orderId: 30 }
        ]
      },
      {
        name: '油行',
        commodityList: [
          { name: '菜籽油', value: 0, orderId: 31 },
          { name: '花生油', value: 0, orderId: 32 },
          { name: '葵花籽油', value: 0, orderId: 33 },
          { name: '橄欖油', value: 0, orderId: 34 },
          { name: '麻油', value: 0, orderId: 35 }
        ]
      },
      {
        name: '酒行',
        commodityList: [
          { name: '清酒', value: 0, orderId: 36 },
          { name: '米酒', value: 0, orderId: 37 },
          { name: '啤酒', value: 0, orderId: 38 },
          { name: '梅酒', value: 0, orderId: 39 },
          { name: '綠茶酒', value: 0, orderId: 40 },
          { name: '杏仁酒', value: 0, orderId: 41 },
        ]
      },
      {
        name: '藥行',
        commodityList: [
          { name: '人參', value: 0, orderId: 42 },
          { name: '黃耆', value: 0, orderId: 43 },
          { name: '枸杞子', value: 0, orderId: 44 },
          { name: '當歸', value: 0, orderId: 45 },
          { name: '甘草', value: 0, orderId: 46 },
          { name: '桂枝', value: 0, orderId: 47 },
          { name: '乾薑', value: 0, orderId: 48 },
          { name: '白朮', value: 0, orderId: 49 },
          { name: '白芍', value: 0, orderId: 50 },
          { name: '陳皮', value: 0, orderId: 51 }
        ]
      }
    ]
  }),
  actions: {

  },
});