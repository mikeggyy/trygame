// 創建將軍
const express = require("express");
const app = express();
app.use(express.json());
const surnames = [
  "菅谷", "小幡", "多田", "松浦", "米谷", "別所", "吉岡", "宮崎", "正木", "吉弘",
  "沼田", "池田", "成富", "佐瀨", "新納", "籾井", "內藤", "太田", "戶澤", "丸目",
  "結城", "伊藤", "小梁川", "德山", "氏家", "大谷", "京極", "長尾", "大久保",
  "朝倉", "畠山", "和田", "山內", "大內", "大村", "寺沢", "石倉", "岩崎",
  "石橋", "石川", "石田", "石原", "岩田", "石井", "石上", "岩下", "柳權",
  "荻原", "堀田", "酒井", "山火內", "豬葉", "亞田", "丹羽", "中岡", "田淵",
  "吉良", "諏訪", "大田原", "中村", "圓城寺", "佐藤", "筑紫", "春日", "蒲池"
];
const warriorNames = [
  "基信", "賢豐", "忠成", "治長", "顯綱", "舜範", "長忠", "廣綱", "重隆", "康英",
  "勝貞", "隆矩", "隆樹", "隆太", "隆志", "隆司", "氏真", "光圀", "家光", "中治",
  "家綱", "綱吉", "家宣", "家継", "家重", "家治", "家斉", "家慶", "家定", "家茂",
  "慶喜", "家榮", "義達", "家明", "家久", "家隆", "家恆", "田定", "吉保", "重秀",
  "景春", "政清", "孝家", "正柱", "定壽", "忠景", "雪応", "義友", "久長", "義央",
  "資孝", "詮真", "為信", "良直", "信綱", "政景", "鎮漣", "惟光", "高增", "為春",
  "實充", "具藤", "貞能", "良候", "鑑種", "清良", "房實", "友通", "壽昌", "政賴",
  "元嘉", "長泰", "藤兼", "資保", "茂季", "元鄰", "義銀", "胤清", "嘉明", "康長",

];
const officialPosition = [
  "老中", "側用人", "若年寄", "大目付", "留守居役", "勘定吟味役", "勘定奉行",
  "作事奉行", "寺社奉行", "北町奉行", "南町奉行", "火附盜賊改", "世話役"
]
const getRandomName = () => {
  const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
  const randomWarriorNameIndex = Math.floor(Math.random() * warriorNames.length);
  const surname = surnames[randomSurnameIndex];
  const warriorName = warriorNames[randomWarriorNameIndex];
  return `${surname}${warriorName}`;
};

const generateShogun = (count) => {
  const peopleList = [];
  // 確定符合條件的職位
  const eligiblePositions = officialPosition.slice(0, count);
  for (let i = 0; i < count; i++) {
    let isNameUnique = false;
    let randomName = '';
    let position = '';

    // 检查名字是否唯一，如果不是，继续生成新名字
    while (!isNameUnique) {
      randomName = getRandomName();
      isNameUnique = !peopleList.some(body => body.name === randomName);
    }


    // 檢查是否還有符合條件的職位
    if (i < eligiblePositions.length) {
      position = eligiblePositions[i];
    }

    // 生成年齡
    const randomAge = Math.floor(Math.random() * 40) + 20;
    const randomAbility = Math.floor(Math.random() * 81) + 20;
    const randomPay = Math.floor(Math.random() * 15) + 30;
    const randomHealth = Math.floor(Math.random() * 40) + 60;
    const body = {
      id: i + 1,
      name: `${randomName}`,
      age: randomAge,
      ability: randomAbility,
      pay: randomPay,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 200,
      // 人物健康度
      health: randomHealth,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: position,
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    };

    peopleList.push(body);
  }

  return peopleList;
}

module.exports = generateShogun;