// import { people } from '@/stores';
import { defineStore } from 'pinia'
// 人物列表
export const people = defineStore({
  id: 'people',
  state: () => ({
    // 介紹人
    peopleList: [
      {
        id: 1,
        name: '隱居的光兵衛',
        age: 40,
        ability: 69,
        pay: 8,
        smuggling: false,
        limit: '',
        headImg: '',
        profession: '介紹人',
        description: ''
      },
      {
        id: 2,
        name: '米屋的雲八',
        age: 48,
        ability: 86,
        pay: 12,
        smuggling: false,
        limit: '',
        headImg: '',
        profession: '介紹人',
        description: ''
      },
      {
        id: 3,
        name: '川久保彥左衛門',
        age: 57,
        ability: 75,
        pay: 8,
        smuggling: false,
        limit: '',
        headImg: '',
        profession: '介紹人',
        description: ''
      },
      {
        id: 4,
        name: '神谷重慶',
        age: 39,
        ability: 56,
        pay: 10,
        smuggling: true,
        limit: '',
        headImg: '',
        profession: '介紹人',
        description: ''
      },
      {
        id: 5,
        name: '新田去定',
        age: 42,
        ability: 47,
        pay: 9,
        smuggling: true,
        limit: '',
        headImg: '',
        profession: '介紹人',
        description: ''
      },
    ]
  }),
  actions: {
    // 創建雜工
    createLaborer(count) {
      const randomNames = [
        '光兵衛', '源八', '仁兵衛', '正之助', '忠兵衛', '平太', '源之助', '平八', '久蔵', '寅吉',
        '勘助', '佐吉', '八十吉', '甚五郎', '太郎太夫', '吾郎', '勘兵衛', '幸之助', '虎之助', '常太夫',
        '正吉', '千之助', '銀之助', '竹之助', '藤之助', '常吉', '彦之助', '稔之助', '鶴之助', '嘉助',
        '隆之助', '彌之助', '彦八', '正蔵', '勝之助', '彌太郎', '龍之介', '安太郎', '源太', '源吾郎',
        '正之丞', '豐太郎', '鶴之丞', '幸太郎', '正一郎', '翠之介', '芳之介', '源之介', '忠之介', '寅之介',
        '彌之介', '千之介', '隆之介', '源吾', '龍之介', '正蔵', '稔之助', '鶴之介', '幸之助', '彌之助',
        '彦八', '正兵衛', '銀之助', '竹之助', '藤之助', '常吉', '彦之助', '稔之助', '鶴之助', '嘉助',
        '隆之助', '彌之助', '彦八', '正蔵', '稔之助', '鶴之介', '幸之助', '正一郎', '翠之介', '芳之介',
        '源之介', '忠之介', '寅之介', '彌之介', '千之介', '隆之介', '源吾', '龍之介', '正蔵', '稔之助',
        '鶴之介', '幸之助', '正一郎', '翠之介', '芳之介', '源之介', '忠之介', '寅之介', '彌之介', '千之介'
      ];
      for (let i = 0; i < count; i++) {
        let isNameUnique = false;
        let randomName = '';

        // 检查名字是否唯一，如果不是，继续生成新名字
        while (!isNameUnique) {
          const randomNameIndex = Math.floor(Math.random() * randomNames.length);
          randomName = randomNames[randomNameIndex];
          isNameUnique = !this.peopleList.some(person => person.name === randomName);
        }

        const randomAge = Math.floor(Math.random() * 10) + 16; // 隨機生成 16 到 25 歲之間的年齡
        const randomAbility = Math.floor(Math.random() * 61) + 20; // 隨機生成 20 到 80 之間的能力值

        const laborer = {
          id: this.peopleList.length + 1, // 人物列表
          name: `${randomName}`, // 雜工名稱，隨機選擇名字
          age: randomAge.toString(),
          ability: randomAbility.toString(),
          pay: 2, // 這裡你可以根據需要設定薪水
          smuggling: false, // 是否走私，這裡假設都不走私
          limit: '',
          headImg: '', // 頭像路徑
          profession: '雜工',
          description: '',
        };

        this.peopleList.push(laborer);
      }
    },
    // 創建保鑣
    createBodyguards(count) {
      const surnames = [
        '佐藤', '鈴木', '田中', '高橋', '渡邊', '伊藤', '中村', '小林', '松本', '加藤',
        '山本', '斎藤', '木村', '林', '清水', '山田', '佐々木', '山口', '石川', '山崎',
        '中島', '小川', '村上', '大野', '平野', '望月', '井上', '岡田', '横山', '吉田',
        '松田', '田村', '荒木', '中西', '坂本', '小野', '藤本', '大塚', '岡本', '金子',
        '井川', '河野', '長谷川', '佐野', '桑原', '田口', '岩崎', '大谷', '高木', '尾上',
        /* 在這裡添加更多的姓氏 */
      ];
      const warriorNames = [
        '武藏', '半藏', '小次郎', '義之', '秀吉', '信長', '家康', '謙信', '幸村', '政宗',
        '兼續', '光秀', '宗茂', '元就', '義弘', '氏康', '信玄', '直茂', '晴久', '利家',
        '元親', '定満', '慶次', '勝家', '長秀', '三成', '長政', '信綱', '宗綱', '元親',
        '勘助', '甚八', '元忠', '清海', '佐助', '半蔵', '小次郎', '源内', '以藏', '歳三',
        '鶴丸', '信乃', '忍次', '虎次郎', '花山', '菊水', '卯之助', '勝之介', '久太郎', '甲斐',
        '虎於', '霧隠', '紅葉', '銀太', '風之介', '銀次', '翔太'
      ];
      const getRandomName = () => {
        const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
        const randomWarriorNameIndex = Math.floor(Math.random() * warriorNames.length);
        const surname = surnames[randomSurnameIndex];
        const warriorName = warriorNames[randomWarriorNameIndex];
        return `${surname}${warriorName}`;
      };
      for (let i = 0; i < count; i++) {
        let isNameUnique = false;
        let randomName = '';

        // 检查名字是否唯一，如果不是，继续生成新名字
        while (!isNameUnique) {
          randomName = getRandomName();
          isNameUnique = !this.peopleList.some(person => person.name === randomName);
        }

        const randomAge = Math.floor(Math.random() * 10) + 26; // 隨機生成 26 到 35 歲之間的年齡
        const randomAbility = Math.floor(Math.random() * 61) + 40; // 隨機生成 40 到 100 之間的能力值

        const bodyguard = {
          id: this.peopleList.length + 1, // 人物列表
          name: `${randomName}`, // 保鑣名稱，隨機選擇名字
          age: randomAge.toString(),
          ability: randomAbility.toString(),
          pay: 10, // 這裡你可以根據需要設定薪水
          smuggling: false, // 是否走私，這裡假設都不走私
          limit: '',
          headImg: '', // 頭像路徑
          profession: '保鑣',
          description: '',
        };

        this.peopleList.push(bodyguard);
      }
    }
  },
});