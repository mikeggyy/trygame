<script setup>
import TimeBar from '@/components/main/TimeBar.vue';
import NavBar from '@/components/main/NavBar.vue';
import SelectStore from '@/components/navbarFn/SelectStore.vue';
import ChangeName from '@/components/navbarFn/ChangeName.vue';
import Hire from '@/components/navbarFn/Hire.vue';
import MeetStaff from '@/components/navbarFn/MeetStaff.vue';
import Shogun from '@/components/navbarFn/Shogun.vue';
import MoveMoney from '@/components/navbarFn/MoveMoney.vue';
import BuySales from '@/components/navbarFn/BuySales.vue';
import SellSales from '@/components/navbarFn/SellSales.vue';
import Build from '@/components/navbarFn/Build.vue';
import Scenes from '@/components/windows/Scenes.vue';
import FamilyInfo from '@/components/windows/FamilyInfo.vue'
import SalesInfo from '@/components/windows/SalesInfo.vue'
import Stock from '@/components/windows/Stock.vue'
import Audio from '@/components/audio/Audio.vue'
import BuildEndEvent from '@/components/event/BuildEndEvent.vue';


import { config, popupState } from '@/stores';
import { ref } from 'vue';
</script>

<template>
  <div class="MainView">
    <TimeBar />
    <NavBar />
    <div class="main__container">
      <!-- 視窗區塊 -->
      <!-- 打開遊戲固定視窗 -->
      <div v-if="config().isGameStart == true">
        <Scenes />
        <FamilyInfo />
        <SalesInfo />
        <Stock />
        <!-- <Audio></Audio> -->
      </div>
      <!-- 開新遊戲視窗 -->
      <div v-if="popupState().newGame == true">
        <SelectStore />
      </div>
      <!-- 輸入姓名視窗 -->
      <div v-if="popupState().changeName == true">
        <ChangeName />
      </div>
      <!-- 幕府重臣的府邸 -->
      <div v-if="popupState().shogun == true">
        <Shogun />
      </div>
      <!-- 買入 -->
      <div v-if="popupState().buySales == true">
        <BuySales />
      </div>
      <!-- 賣出 -->
      <div v-if="popupState().sellSales == true">
        <SellSales />
      </div>
      <!-- 建造 -->
      <div v-if="popupState().buildType != ''">
        <Build />
      </div>
      <!-- 資金移動 -->
      <div v-if="popupState().moveMoney != ''">
        <MoveMoney />
      </div>
      <!-- 招募員工 -->
      <div v-if="popupState().hireType != ''">
        <Hire />
      </div>
      <!-- 傳喚視窗 -->
      <div v-if="popupState().meetStaffType != ''">
        <MeetStaff />
      </div>
      <!-- 建造完成 -->
      <div v-if="popupState().buildEndItem != ''">
        <BuildEndEvent />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.MainView {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(../assets/images/main-bg.png);
  background-repeat: repeat;
}

.main__container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>