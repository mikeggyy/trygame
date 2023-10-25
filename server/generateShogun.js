// 創建將軍
const express = require("express");
const app = express();
app.use(express.json());

const officialPosition = [
  "老中", "側用人", "若年寄", "大目付", "留守居役", "勘定吟味役", "勘定奉行",
  "作事奉行", "寺社奉行", "北町奉行", "南町奉行", "火附盜賊改", "世話役"
]

const generateShogun = () => {
  let body = []
  body = [
    {
      id: 1,
      name: '土屋政直',
      age: 48,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '老中',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 2,
      name: '柳澤吉保',
      age: 52,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '側用人',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 3,
      name: '酒井忠真',
      age: 39,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '若年寄',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 4,
      name: '水野守政',
      age: 36,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '大目付',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 5,
      name: '加賀爪直澄',
      age: 43,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '留守居役',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 6,
      name: '關孝和',
      age: 34,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '勘定吟味役',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 7,
      name: '稻生正照',
      age: 37,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '勘定奉行',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 8,
      name: '木全忠澄',
      age: 44,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '作事奉行',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 9,
      name: '水野忠春',
      age: 45,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '寺社奉行',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 10,
      name: '遠山景元',
      age: 32,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '北町奉行',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 11,
      name: '小栗忠順',
      age: 49,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '南町奉行',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 12,
      name: '土岐賴稔',
      age: 32,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '火附盜賊改',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 13,
      name: '井上源三郎',
      age: 43,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '世話役',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 14,
      name: '小出英持',
      age: 21,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 15,
      name: '毛利政苗',
      age: 25,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 16,
      name: '松平乘佑',
      age: 20,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 17,
      name: '牧野惟成',
      age: 22,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 18,
      name: '立花種周',
      age: 23,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 19,
      name: '大久保忠真',
      age: 18,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 20,
      name: '青山幸哉',
      age: 17,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 21,
      name: '黑田直邦',
      age: 19,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
    {
      id: 22,
      name: '仙石政房',
      age: 20,
      ability: 100,
      pay: 500,
      // 薪水限制
      paylimit: 500,
      // 人物好感度
      howMuchLike: 0,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'shogun-001.png',
      type: '幕府重臣',
      profession: '',
      description: '幕府重臣',
      status: '',
      doYouKnow: false
    },
  ]
  return body;
}
module.exports = generateShogun;