<script setup>
import TimeBar from '@/components/main/TimeBar.vue';
import NavBar from '@/components/main/NavBar.vue';
import SelectStore from '@/components/navbarFn/SelectStore.vue';
import ChangeName from '@/components/navbarFn/ChangeName.vue';
import Hire from '@/components/navbarFn/Hire.vue';
import MeetStaff from '@/components/navbarFn/MeetStaff.vue';
import Scenes from '@/components/windows/Scenes.vue';
import FamilyInfo from '@/components/windows/FamilyInfo.vue'
import SalesInfo from '@/components/windows/SalesInfo.vue'
import Stock from '@/components/windows/Stock.vue'
import Audio from '@/components/audio/Audio.vue'
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
        <Audio></Audio>
      </div>
      <!-- 開新遊戲視窗 -->
      <div v-if="popupState().newGame == true">
        <SelectStore />
      </div>
      <!-- 輸入姓名視窗 -->
      <div v-if="popupState().changeName == true">
        <ChangeName />
      </div>
      <!-- 招募員工 -->
      <div v-if="popupState().hireType != ''">
        <Hire />
      </div>
      <!-- 傳喚視窗 -->
      <div v-if="popupState().meetStaffType != ''">
        <MeetStaff />
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