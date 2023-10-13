const express = require('express');
const cors = require('cors'); // 引入 cors 模块
const app = express();
app.use(cors())
app.use(express.json());


const generateLaborer = require('./generateLaborer.js'); // 引入 generatePeopleList.js 文件
const generateBodyguards = require('./generateBodyguards.js');
const generateIntroducer = require('./generateIntroducer.js');
const generateShipMan = require('./generateShipMan.js');

app.get("/api/generateAllData", (req, res) => {
  const laborerCount = req.query.laborerCount || 0;
  const bodyguardsCount = req.query.bodyguardsCount || 0;
  const shipManCount = req.query.shipManCount || 0;

  const introducers = generateIntroducer();
  const laborers = generateLaborer(laborerCount);
  const bodyguards = generateBodyguards(bodyguardsCount);
  const shipMan = generateShipMan(shipManCount);
  const allData = [...introducers, ...laborers, ...bodyguards, ...shipMan];
  res.json(allData);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});