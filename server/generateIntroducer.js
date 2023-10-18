// 創建介紹人
const express = require("express");
const app = express();
app.use(express.json());
const generateIntroducer = () => {
  let body = []
  body = [
    {
      id: 1,
      name: '隱居的光兵衛',
      age: 54,
      ability: 69,
      pay: 16,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      smuggling: false,
      limit: '',
      headImg: 'introducer-001.png',
      type: '介紹人',
      profession: '隱居',
      description: '光兵衛是一位非常慈悲和寬容的人。傳聞他過去無私的幫助陷入困境的人們，不求回報。'
    },
    {
      id: 2,
      name: '谷中的傳八',
      age: 48,
      ability: 86,
      pay: 24,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      smuggling: false,
      limit: '',
      headImg: 'introducer-002.png',
      type: '介紹人',
      profession: '文化人',
      description: ''
    },
    {
      id: 3,
      name: '川久保彥左衛門',
      age: 57,
      ability: 75,
      pay: 16,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      smuggling: false,
      limit: '',
      headImg: 'introducer-001.png',
      type: '介紹人',
      profession: '醫生',
      description: ''
    },
    {
      id: 4,
      name: '神谷重慶',
      age: 39,
      ability: 56,
      pay: 20,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      smuggling: true,
      limit: '',
      headImg: 'introducer-004.png',
      type: '介紹人',
      profession: '僧侶',
      description: ''
    },
    {
      id: 5,
      name: '新田去定',
      age: 42,
      ability: 47,
      pay: 18,
      // 薪水限制
      paylimit: 50,
      impression: 50,
      smuggling: true,
      limit: '',
      headImg: 'introducer-001.png',
      type: '介紹人',
      profession: '御前仕從',
      description: ''
    },
  ]
  return body;
}

module.exports = generateIntroducer; // 导出函数