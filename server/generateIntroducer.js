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
      // 能力
      ability: 79,
      pay: 16,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'introducer-001.png',
      type: '介紹人',
      profession: '隱居',
      description: '光兵衛是一位非常慈悲和寬容的人。傳聞他過去無私的幫助陷入困境的人們，不求回報。',
      status:''
    },
    {
      id: 2,
      name: '谷中的傳八',
      age: 48,
      ability: 90,
      pay: 24,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'introducer-002.png',
      type: '介紹人',
      profession: '文化人',
      description: '',
      status:''
    },
    {
      id: 3,
      name: '川久保彥左衛門',
      age: 57,
      ability: 85,
      pay: 16,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      // 人物健康度
      health: 80,
      smuggling: false,
      limit: '',
      headImg: 'introducer-003.png',
      type: '介紹人',
      profession: '醫生',
      description: '',
      status:''
    },
    {
      id: 4,
      name: '神谷重慶',
      age: 39,
      ability: 66,
      pay: 20,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      // 人物健康度
      health: 80,
      smuggling: true,
      limit: '',
      headImg: 'introducer-004.png',
      type: '介紹人',
      profession: '僧侶',
      description: '',
      status:''
    },
    {
      id: 5,
      name: '新田去定',
      age: 42,
      ability: 57,
      pay: 18,
      // 薪水限制
      paylimit: 50,
      // 人物好感度
      howMuchLike: 200,
      // 人物健康度
      health: 80,
      smuggling: true,
      limit: '',
      headImg: 'introducer-005.png',
      type: '介紹人',
      profession: '御家人',
      description: '',
      status:''
    },
  ]
  return body;
}

module.exports = generateIntroducer; // 导出函数