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
      age: 40,
      ability: 69,
      pay: 16,
      impression: 50,
      smuggling: false,
      limit: '',
      headImg: 'introducer-001.jpg',
      type: '介紹人',
      profession: '退休',
      description: ''
    },
    {
      id: 2,
      name: '米屋的雲八',
      age: 48,
      ability: 86,
      pay: 24,
      impression: 50,
      smuggling: false,
      limit: '',
      headImg: 'introducer-001.jpg',
      type: '介紹人',
      profession: '米店',
      description: ''
    },
    {
      id: 3,
      name: '川久保彥左衛門',
      age: 57,
      ability: 75,
      pay: 16,
      impression: 50,
      smuggling: false,
      limit: '',
      headImg: 'introducer-001.jpg',
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
      impression: 50,
      smuggling: true,
      limit: '',
      headImg: 'introducer-001.jpg',
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
      impression: 50,
      smuggling: true,
      limit: '',
      headImg: 'introducer-001.jpg',
      type: '介紹人',
      profession: '御前仕從',
      description: ''
    },
  ]
  return body;
}

module.exports = generateIntroducer; // 导出函数