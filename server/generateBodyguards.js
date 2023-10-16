// 創建保鑣
const express = require("express");
const app = express();
app.use(express.json());
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

const generateBodyguards = (count) => {
  const peopleList = [];

  for (let i = 0; i < count; i++) {
    let isNameUnique = false;
    let randomName = '';

    // 检查名字是否唯一，如果不是，继续生成新名字
    while (!isNameUnique) {
      randomName = getRandomName();
      isNameUnique = !peopleList.some(body => body.name === randomName);
    }

    const randomAge = Math.floor(Math.random() * 30) + 9;
    const randomAbility = Math.floor(Math.random() * 81) + 20;
    const randomPay = Math.floor(Math.random() * 10) + 6;
    const randomSmuggling = Math.random() > 0.9;
    const body = {
      id: i + 1,
      name: `${randomName}`,
      age: randomAge,
      ability: randomAbility,
      pay: randomPay,
      impression: 50,
      smuggling: randomSmuggling,
      limit: '',
      headImg: 'bodyguards-001.png',
      type: '保鑣',
      profession: '保鑣',
      description: '沒落的武士',
    };

    peopleList.push(body);
  }

  return peopleList;
}

module.exports = generateBodyguards;