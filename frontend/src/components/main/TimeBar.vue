<script setup>
import { ref, computed } from 'vue';
import { config } from '@/stores';
import { formattedDate } from '@/unit/formattedDate.js';
</script>
<template>
  <div class="TimeBar">
    <div class="imgBox">
      <img src="/favicon.svg" alt="">
    </div>
    <div v-if="config().isGameStart == true" class="time">{{ formattedDate }}</div>
  </div>
</template>

<style lang="scss" scoped>
.TimeBar {
  width: 100%;
  height: 26px;
  background-color: #00028C;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .imgBox {
    width: 20px;
    font-size: 0;
  }

  .time {
    margin-left: 10px;
    cursor: default;
  }
}
</style>