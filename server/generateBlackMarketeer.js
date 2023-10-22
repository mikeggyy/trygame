// 產生雜工
const express = require("express");
const app = express();
app.use(express.json());
const randomNames = [
    "佐藤助",
    "鈴木蔵",
    "高橋之助",
    "田中八荒",
    "伊藤豐",
    "山本螽",
    "渡邊忠一",
    "中村裕二",
    "小林藤次",
    "加藤英",
];


function generateRandomName(peopleList) {
  let isNameUnique = false;
  let randomName = '';

  // 检查名字是否唯一，如果不是，继续生成新名字
  while (!isNameUnique) {
    const randomNameIndex = Math.floor(Math.random() * randomNames.length);
    randomName = randomNames[randomNameIndex];
    isNameUnique = !peopleList.some(person => person.name === randomName);
  }

  return randomName;
}
function generateBlackMarketeer(count) {
  const peopleList = [];

  for (let i = 0; i < count; i++) {
    const randomName = generateRandomName(peopleList); // 将 peopleList 作为参数传递
    const randomAge = Math.floor(Math.random() * 20) + 16;
    const randomAbility = Math.floor(Math.random() * 71) + 20;
    const randomPay = Math.floor(Math.random() * 4) + 2;
    const randomSmuggling = true;
    const randomHealth = Math.floor(Math.random() * 10) + 90;
    const body = {
      id: peopleList.length + 1,
      name: randomName,
      age: randomAge,
      ability: randomAbility,
      pay: randomPay,
      // 薪水限制
      paylimit: 15,
      // 人物好感度
      howMuchLike: 200,
      // 人物健康度
      health: randomHealth,
      smuggling: randomSmuggling,
      limit: '',
      headImg: 'blackMarketeer-001.png',
      type: '黑市商人',
      profession: '黑市商人',
      description: '',
      status:''
    };

    peopleList.push(body);
  }

  return peopleList;
}

module.exports = generateBlackMarketeer; // 导出函数
