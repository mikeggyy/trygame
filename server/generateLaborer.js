// 產生雜工
const express = require("express");
const app = express();
app.use(express.json());
const randomNames = [
  '光兵衛', '源八', '仁兵衛', '正之助', '忠兵衛', '平太', '源之助', '平八', '久蔵', '寅吉',
  '勘助', '佐吉', '八十吉', '甚五郎', '太郎太夫', '吾郎', '勘兵衛', '幸之助', '虎之助', '常太夫',
  '正吉', '千之助', '銀之助', '竹之助', '藤之助', '常吉', '彦之助', '稔之助', '鶴之助', '嘉助',
  '隆之助', '彌之助', '彦太', '正蔵', '勝之助', '彌太郎', '安太郎', '源太', '源吾郎',
  '正之丞', '豐太郎', '鶴之丞', '幸太郎', '正一郎', '翠之介', '芳之介', '源之介', '忠之介', '寅之介',
  '彌之介', '千之介', '隆之介', '龍之介', '正三', '稔吉', '鶴之介', '幸吉', '彌吉',
  '彦八', '正兵衛', '銀之助', '竹之助', '藤之助', '常吉', '彦之助', '稔之助', '嘉吾',
  '隆吾', '彌太', '彦吾', '正吾', '稔吾', '鶴吾', '幸吾', '芳吾',
  '源三', '忠吾', '寅吾', '彌吾', '千吾', '源吾',
  , '源助', '忠太', '寅兵衛'
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
function generateLaborer(count) {
  const peopleList = [];

  for (let i = 0; i < count; i++) {
    const randomName = generateRandomName(peopleList); // 将 peopleList 作为参数传递
    const randomAge = Math.floor(Math.random() * 20) + 5;
    const randomAbility = Math.floor(Math.random() * 71) + 20;
    const randomPay = Math.floor(Math.random() * 4) + 2;
    const randomSmuggling = Math.random() > 0.9;
    const randomHealth = Math.floor(Math.random() * 40) + 60;
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
      headImg: 'laborer-001.png',
      type: '雜工',
      profession: '',
      description: '沒沒無聞的雜工',
      status:''
    };

    peopleList.push(body);
  }

  return peopleList;
}

module.exports = generateLaborer; // 导出函数
