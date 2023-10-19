<script setup>
import { navBar, popupState, config } from '@/stores';
import { ref } from 'vue';
import { toWork } from '@/unit/toWork.js'; // 导入 toWork 函数
const navBarStore = navBar();
const navList = ref(navBarStore.navList);
const activeIndex = ref(null); // 用於追蹤當前啟用的菜單項索引
const subIndex = ref(null);
const setActiveIndex = (index) => {
  activeIndex.value = index; // 設定當前啟用的菜單項索引為傳入的 index
}
const clearActiveIndex = () => {
  activeIndex.value = null; // 重設當前啟用的菜單項索引為 null，關閉所有子菜單
}
const setSubIndex = (index) => {
  subIndex.value = index; // 設定當前啟用的菜單項索引為傳入的 index
}
const clearSubIndex = (index) => {
  subIndex.value = null; // 重設當前啟用的菜單項索引為 null，關閉所有子菜單
}

const subItemHandle = (item) => {
  activeIndex.value = null;
  switch (item.fn) {
    case '儲存進度':
      break;
    case '讀取進度':
      break;
    case '新遊戲':
      popupState().closeAllPopups()
      config().resetGameStart()
      popupState().setNewGame(true)
      break;
    case '買入':
      popupState().setBuySales(true)
      break;
    case '傳喚':
      popupState().setMeetStaffType(item.name)
      break;
  }
}
const subItemHandle2 = (item) => {
  activeIndex.value = null;
  switch (item.fn) {
    case '工作':
      toWork(item.value)
      break;
    case '資金移動':
      popupState().setMoveMoney(item.name);
      break;
    case '雇用員工':
      popupState().setHireType(item.name);
      break;
    case '新遊戲':
      break;
  }
}

</script>

<template>
  <div class="NavBar">
    <!-- 遍歷導航項 -->
    <div class="nav-btn" :class="config().isTimeStart == true ? 'start' : 'no-start'" v-for="(item, index) in navList"
      @mouseenter="clearSubIndex" @mouseover="setActiveIndex(index)" @mouseout="clearActiveIndex">
      <div class="hover" v-if="config().isGameStart == true || index == 0">
        <div>{{ item.name }}</div>
        <!-- 顯示子菜單，僅當當前啟用的菜單項的索引與當前遍歷的索引相同時顯示 -->
        <!-- v-show="activeIndex === index" -->
        <div class="nav-sub-1" v-show="activeIndex === index && config().isTimeStart == false">
          <!-- 遍歷子菜單項 -->
          <div class="subItem1" v-for="(subItem1, index) in item.list" @click="subItemHandle(subItem1)">
            <div v-if="config().isGameStart == true || index > 0" @mouseover="setSubIndex(index)">{{ subItem1.name }}
            </div>
            <div class="nav-sub-2" v-show="subIndex === index && subItem1.list2">
              <div class="subItem2" v-for="(subItem2, index) in subItem1.list2" @click="subItemHandle2(subItem2)">
                <div>{{ subItem2.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.NavBar {
  width: 100%;
  height: 40px;
  padding-left: 20px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 1000;

  .nav-btn {
    width: 80px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.start {
      color: gray;

      .hover {
        cursor: pointer;
      }
    }

    &.no-start {
      .hover {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
          background-color: rgb(176, 209, 248); // 滑鼠懸停時的背景顏色
        }
      }
    }


    .nav-sub-1 {
      position: absolute;
      width: 120px;
      top: 40px; // 子菜單距離父菜單底部的距離
      left: -20px;
      background-color: #FFFFFF; // 子菜單背景顏色
      text-align: center; // 文字居中顯示
      border: 1px solid black; // 子菜單邊框

      .subItem1 {
        position: relative;
        cursor: pointer;

        &:hover>div:nth-child(1) {
          background-color: rgb(176, 209, 248); // 滑鼠懸停時的背景顏色
        }
      }
    }

    .nav-sub-2 {
      width: 120px;
      position: absolute;
      background-color: #FFFFFF; // 子菜單背景顏色
      border: 1px solid black; // 子菜單邊框
      left: 119px;
      top: 0px;

      .subItem2 {
        cursor: pointer;

        &:hover>div:nth-child(1) {
          background-color: rgb(176, 209, 248); // 滑鼠懸停時的背景顏色
        }
      }
    }
  }
}
</style>