// 創建船長
const express = require("express");
const app = express();
app.use(express.json());
const surnames = [
  '不可阻擋的', '不撓的', '無懈可擊的', '不死之身的', '勇往直前的', '重情的', '冷酷的', '無比強大的',
  '剛毅的', '韌性的', '不知疲倦的', '鋼鐵般的', '堅定不移的', '毫不妥協的', '不退縮的', '不可壓倒的',
  '無畏無懼的', '堅定如磐的', '不可動搖的', '不可戰勝的', '堅忍不拔的', '不可撼動的', '鮫殺的', '無所畏懼的',
  '不容侵犯的', '無法擊倒的', '豪邁的', '友情的', '殘忍的', '冷淡的', '卑劣的', '陰險的', '狡猾的', '虛偽的',
  '不值一提的', '可憐的', '卑鄙的', '可惡的', '淒慘的', '污穢的', '下流的', '懦弱的', '腐敗的', '無恥的',
  '自私的', '無能的', '愚蠢的', '偏執的', '頑固的', '自大的', '狂妄的', '幼稚的', '膚淺的', '懶惰的',
  '憤世嫉俗的', '自由的', '自戀的', '無禮的', '冷漠的', '苛刻的', '愛慕虛榮的', '無情的', '迷惑的',
  '迷人的', '蒼白的', '無助的', '痛苦的', '無聊的', '迷惘的', '單調的', '失落的', '絕望的', '沮喪的', '疲憊的',
  '憤怒的', '嫉妒的', '焦慮的', '悲觀的', '沉悶的', '無望的', '複雜的', '矛盾的', '困惑的', '迷茫的', '無奈的'
];
const warriorNames = [
  '太郎', '次郎', '三郎', '四郎', '五郎', '六郎', '七郎', '八郎', '九郎', '十郎',
  '之助', '之丞', '之介', '平八', '源太', '庄助', '作兵衛', '新之助', '半兵衛', '甚吉',
  '伊助', '作之助', '三兵衛', '治兵衛', '小次郎', '庄兵衛', '治郎', '佐吉', '仁吉', '勝之助',
  '寅之助', '八兵衛', '蔵六', '弥助', '丑之助', '外記', '玄之助', '図書', '大八', '次兵衛',
  '与市', '又左', '市之助', '鉄之助', '優助', '善助', '文之助', '優吉', '庄之助', '友之助',
  '宗茂', '元就', '義弘', '直茂', '晴久', '利家', '吉親', '定満', '慶次', '勝家', '長秀',
  '三成', '長政', '信綱', '宗綱', '元親', '勘助', '甚八', '元忠', '清海', '佐助',
  '半蔵', '小次郎', '源内', '以藏', '歳三', '鶴丸', '信乃', '忍次', '虎次郎', '花山',
  '菊水', '卯之助', '勝之介', '久太郎', '甲斐', '虎於', '霧隠', '紅葉', '銀太', '風之介',
  '銀次', '翔太'
];

const getRandomName = () => {
  const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
  const randomWarriorNameIndex = Math.floor(Math.random() * warriorNames.length);
  const surname = surnames[randomSurnameIndex];
  const warriorName = warriorNames[randomWarriorNameIndex];
  return `${surname}${warriorName}`;
};

const generateShipMan = (count) => {
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
      headImg: 'shipMan-001.png',
      type: '船長',
      profession: '',
      description: '沒沒無聞的船長',
    };

    peopleList.push(body);
  }

  return peopleList;
}

module.exports = generateShipMan;