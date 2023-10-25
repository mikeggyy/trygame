const express = require('express');
const cors = require('cors'); // 引入 cors 模块
const app = express();
app.use(cors())
app.use(express.json());


const generateLaborer = require('./generateLaborer.js'); // 引入 generatePeopleList.js 文件
const generateBodyguards = require('./generateBodyguards.js');
const generateIntroducer = require('./generateIntroducer.js');
const generateShipMan = require('./generateShipMan.js');
const generateBlackMarketeer = require('./generateBlackMarketeer.js');
const generateWoodWorkMan = require('./generateWoodWorkMan.js');
const generateShogun = require('./generateShogun.js');

app.get("/api/generateAllData", async (req, res) => {
  try {
    const laborerCount = req.query.laborerCount || 0;
    const bodyguardsCount = req.query.bodyguardsCount || 0;
    const shipManCount = req.query.shipManCount || 0;

    const introducers = await generateIntroducer();
    const laborers = await generateLaborer(laborerCount);
    const bodyguards = await generateBodyguards(bodyguardsCount);
    const shipMan = await generateShipMan(shipManCount);
    const blackMarketeer = await generateBlackMarketeer(10);
    const woodWorkMan = await generateWoodWorkMan(8);
    const shogun = await generateShogun(40);
    const allData = [...introducers, ...laborers, ...bodyguards, ...shipMan, ...blackMarketeer, ...woodWorkMan, ...shogun];
    res.json(allData);
  } catch (err) {
    // 處理錯誤
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});