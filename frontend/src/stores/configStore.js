import { defineStore } from 'pinia'

//設定檔
export const config = defineStore({
  id: 'config',
  state: () => ({
    name: '江戶商',
    age: 20,
    // 創業幾年
    afterYears: 0,
    // 倉庫數量
    warehouseSize: 1,
    // 船隻數量
    shipSize: 0,
    // 停靠港
    portSize: 1,
    // 昨日銷貨
    yesterdaySales: 0,
    // 總庫存量
    totalInventory: 0,
    // 本月銷貨
    salesThisMonth: 0,
    // 倉庫總容量
    totalWarehouse: 100000,
    // 上月銷貨
    salesLastMonth: 0,
    // 借款金額
    loanAmount: 0,
    // 今年銷貨
    salesThisYear: 0,
    // 私房錢
    privateMoney: 0,
    // 去年銷貨
    lastYearSales: 0,
    // 金主
    totalAssets: 12000,
    // 貨物清單
    salesList: [],
    // 職業
    profession: '',
    // 現在所在位置
    currentLocation: 'home',
    // 現在時間
    date: new Date('1688-01-01'), // 初始日期为 '1688-01-01',
    // 遊戲進行中嗎
    isGameStart: false,
    // 是否日期正在移動中
    isTimeStart: false,
    // 員工總數
    allEmployees: [],
    // 退休員工總數
    allRetire: [],
    // 介紹人限制
    introducerLimit: 1,
    // 雜工限制
    laborerLimit: 12,
    // 保鑣限制
    bodyguardLimit: 6,
    // 船長限制
    shipManLimit: 4,
  }),
  getters: {
    // 家族人數
    familySize(state) {
      return state.allEmployees.filter(employee => employee.type === '家人').length;
    },
    // 佣人數量
    laborerSize(state) {
      return state.allEmployees.filter(employee => employee.type === '雜工').length;
    },
    // 保鑣人數
    bodyguardSize(state) {
      return state.allEmployees.filter(employee => employee.type === '保鑣').length;
    },
    // 船長數量
    shipManSzie(state) {
      return state.allEmployees.filter(employee => employee.type === '船長').length;
    },
  },
  actions: {
    setName(name) {
      this.name = name;
    },
    setProfession(name) {
      this.profession = name;
    },
    setGameStart() {
      this.isGameStart = true;
    },
    resetGameStart() {
      this.isGameStart = false;
    },
    increaseDate() {
      const currentDate = new Date(this.date);
      // 增加日期
      currentDate.setDate(currentDate.getDate() + 1);
      // 获取当前月份的最后一天
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      // 如果当前日期大于当前月份的最后一天，将日期设置为当前月份的最后一天
      if (currentDate.getDate() > lastDayOfMonth) {
        currentDate.setDate(lastDayOfMonth);
      }
      // 檢查閏年
      const isLeapYear = (currentDate.getFullYear() % 4 === 0 && currentDate.getFullYear() % 100 !== 0) || currentDate.getFullYear() % 400 === 0;
      // 如果是2月29日但不是闰年，将日期设置为2月28日
      if (currentDate.getMonth() === 1 && currentDate.getDate() === 29 && !isLeapYear) {
        currentDate.setDate(28);
      }
      // 檢查是否過年，如果是，將年齡加1
      const currentYear = currentDate.getFullYear();
      if (currentYear > this.date.getFullYear()) {
        this.age++; // 將年齡加1
        this.afterYears++;
      }
      // 更新date的值，这将触发Vue的响应式系统
      this.date = new Date(currentDate);
    },
    setTimeStart(value) {
      this.isTimeStart = value
    },
    setSalesList(data) {
      this.salesList = data
    },
    setEmployees(item) {
      this.allEmployees.push(item)
    },
    // 開除員工
    fireEmployees(employeeName) {
      const employeeIndex = this.allEmployees.findIndex(employee => employee.name === employeeName);
      // 好感度歸0
      this.allEmployees[employeeIndex].howMuchLike = 0;
      // 放進退休名單
      this.allRetire = this.allEmployees.filter(employee => employee.name === employeeName);
      // 員工除名
      this.allEmployees.splice(employeeIndex, 1);
    },
    // 設定金主
    setTotalAssets(num) {
      this.totalAssets = this.totalAssets + num
    },
    // 設定私房錢
    setPrivateMoney(num) {
      this.privateMoney = this.privateMoney + num
    },
    // 設定某人好感度
    setHowMuchLike(payload) {
      const { index, value } = payload;
      this.allEmployees[index].howMuchLike = this.allEmployees[index].howMuchLike + value;
    },
    // 設定加薪
    setPay(payload) {
      const { index, value } = payload;
      this.allEmployees[index].pay = value;
    },
  },

});