// 產生雜工
const express = require("express");
const app = express();
app.use(express.json());
const surnames = [
    "精準的",
    "敬業的",
    "謹慎的",
    "細心的",
    "熱情的",
    "專注的",
    "勤奮的",
    "靈巧的",
    "老練的",
    "堅毅的"
  ];
const warriorNames = [
    "兵吉",
    "平次",
    "太郎",
    "庄助",
    "市之助",
    "五兵衛",
    "源次",
    "三郎",
    "助六",
    "九兵衛"
];

const getRandomName = () => {
    const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
    const randomWarriorNameIndex = Math.floor(Math.random() * warriorNames.length);
    const surname = surnames[randomSurnameIndex];
    const warriorName = warriorNames[randomWarriorNameIndex];
    return `${surname}${warriorName}`;
};
const generateWoodWorkMan = (count) => {
    const peopleList = [];
  
    for (let i = 0; i < count; i++) {
      let isNameUnique = false;
      let randomName = '';
  
      // 检查名字是否唯一，如果不是，继续生成新名字
      while (!isNameUnique) {
        randomName = getRandomName();
        isNameUnique = !peopleList.some(body => body.name === randomName);
      }
  
      const randomAge = Math.floor(Math.random() * 30) + 16;
      const randomAbility = Math.floor(Math.random() * 81) + 20;
      const randomPay = Math.floor(Math.random() * 15) + 30;
      const randomSmuggling = Math.random() > 0.9;
      const randomHealth = Math.floor(Math.random() * 40) + 60;
      const body = {
        id: i + 1,
        name: `${randomName}`,
        age: randomAge,
        ability: randomAbility,
        pay: randomPay,
        // 薪水限制
        paylimit: 50,
        // 人物好感度
        howMuchLike: 200,
        // 人物健康度
        health: randomHealth,
        smuggling: randomSmuggling,
        limit: '',
        headImg: 'woodWorkMan-001.png',
        type: '木工',
        profession: '木工',
        description: '沒沒無聞的木工',
        status:''
      };
  
      peopleList.push(body);
    }
  
    return peopleList;
  }
  
  module.exports = generateWoodWorkMan;
