import { defineStore } from 'pinia'

//職業
export const profession = defineStore({
  id: 'profession',
  state: () => ({
    professionlist: [
      {
        name: '海產行',
        commodityList: [
          { name: '鯛魚', value: 0, orderId: 1, minMoney: 0.84, maxMoney: 1.67, averageMoney: 1.17 },
          { name: '鮪魚', value: 0, orderId: 2, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
          { name: '鯖魚', value: 0, orderId: 3, minMoney: 0.5, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '蛤蜊', value: 0, orderId: 4, minMoney: 0.33, maxMoney: 0.84, averageMoney: 0.5 },
          { name: '扇貝', value: 0, orderId: 5, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
          { name: '牡蠣', value: 0, orderId: 6, minMoney: 0.33, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '魚翅', value: 0, orderId: 7, minMoney: 1.0, maxMoney: 2.0, averageMoney: 1.5 },
          { name: '海參', value: 0, orderId: 8, minMoney: 0.67, maxMoney: 1.5, averageMoney: 1.0 },
          { name: '海帶', value: 0, orderId: 9, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
          { name: '昆布', value: 0, orderId: 10, minMoney: 0.33, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '魚乾', value: 0, orderId: 11, minMoney: 0.33, maxMoney: 0.84, averageMoney: 0.5 },
          { name: '魚醬', value: 0, orderId: 12, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 }
        ]
      },
      {
        name: '雜貨行',
        commodityList: [
          { name: '酱油', value: 0, orderId: 13, minMoney: 0.33, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '醋', value: 0, orderId: 14, minMoney: 0.17, maxMoney: 0.67, averageMoney: 0.33 },
          { name: '味噌', value: 0, orderId: 15, minMoney: 0.33, maxMoney: 0.84, averageMoney: 0.5 },
          { name: '糖', value: 0, orderId: 16, minMoney: 0.17, maxMoney: 0.5, averageMoney: 0.33 },
          { name: '鹽', value: 0, orderId: 17, minMoney: 0.17, maxMoney: 0.5, averageMoney: 0.33 },
          { name: '米', value: 0, orderId: 18, minMoney: 0.33, maxMoney: 0.84, averageMoney: 0.5 },
          { name: '大豆醬', value: 0, orderId: 19, minMoney: 0.33, maxMoney: 0.84, averageMoney: 0.5 },
          { name: '蕎麥麵', value: 0, orderId: 20, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
          { name: '茶', value: 0, orderId: 21, minMoney: 0.17, maxMoney: 0.67, averageMoney: 0.33 },
          { name: '海苔', value: 0, orderId: 22, minMoney: 0.33, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '芥末', value: 0, orderId: 23, minMoney: 0.17, maxMoney: 0.5, averageMoney: 0.33 },
          { name: '柴魚', value: 0, orderId: 24, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
        ]
      },
      {
        name: '米行',
        commodityList: [
          { name: '糙米', value: 0, orderId: 25, minMoney: 0.5, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '白米', value: 0, orderId: 26, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
          { name: '玄米', value: 0, orderId: 27, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
          { name: '小米', value: 0, orderId: 28, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
          { name: '糯米', value: 0, orderId: 29, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
          { name: '黑米', value: 0, orderId: 30, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
        ]
      },
      {
        name: '油行',
        commodityList: [
          { name: '菜籽油', value: 0, orderId: 31, minMoney: 0.5, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '花生油', value: 0, orderId: 32, minMoney: 0.5, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '葵花籽油', value: 0, orderId: 33, minMoney: 0.5, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '橄欖油', value: 0, orderId: 34, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
          { name: '麻油', value: 0, orderId: 35, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
        ]
      },
      {
        name: '酒行',
        commodityList: [
          { name: '清酒', value: 0, orderId: 36, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
          { name: '米酒', value: 0, orderId: 37, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
          { name: '啤酒', value: 0, orderId: 38, minMoney: 0.33, maxMoney: 0.84, averageMoney: 0.5 },
          { name: '梅酒', value: 0, orderId: 39, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
          { name: '綠茶酒', value: 0, orderId: 40, minMoney: 0.33, maxMoney: 0.84, averageMoney: 0.5 },
          { name: '杏仁酒', value: 0, orderId: 41, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
        ]
      },
      {
        name: '藥行',
        commodityList: [
          { name: '人參', value: 0, orderId: 42, minMoney: 1.34, maxMoney: 2.51, averageMoney: 1.84 },
          { name: '黃耆', value: 0, orderId: 43, minMoney: 1.0, maxMoney: 2.01, averageMoney: 1.51 },
          { name: '枸杞子', value: 0, orderId: 44, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
          { name: '當歸', value: 0, orderId: 45, minMoney: 0.84, maxMoney: 1.68, averageMoney: 1.18 },
          { name: '甘草', value: 0, orderId: 46, minMoney: 0.5, maxMoney: 1.0, averageMoney: 0.67 },
          { name: '桂枝', value: 0, orderId: 47, minMoney: 0.67, maxMoney: 1.34, averageMoney: 1.0 },
          { name: '乾薑', value: 0, orderId: 48, minMoney: 0.5, maxMoney: 1.17, averageMoney: 0.84 },
          { name: '白朮', value: 0, orderId: 49, minMoney: 0.34, maxMoney: 0.84, averageMoney: 0.67 },
          { name: '白芍', value: 0, orderId: 50, minMoney: 0.34, maxMoney: 0.84, averageMoney: 0.67 },
          { name: '陳皮', value: 0, orderId: 51, minMoney: 0.17, maxMoney: 0.67, averageMoney: 0.34 },
        ]
      }
    ]
  }),
  actions: {

  },
});