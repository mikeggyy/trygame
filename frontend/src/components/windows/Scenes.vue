<!-- 場景視窗 -->
<script setup>
import { ref, onMounted } from 'vue';
import { config } from '@/stores';
import { debounce } from 'lodash'; // 或者其他防抖函数库
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
const placeName = (name) => {
  switch (name) {
    case 'home-001':
      return '自宅'
  }
}

</script>
<template>
  <div class="Scenes">
    <TitleForPopup :name="placeName(config().currentLocation)" :showCloseBtn="false" />
    <img :src="`/images/place/${config().currentLocation}.png`" alt="">
  </div>
</template>

<style lang="scss" scoped>
.Scenes {
  width: 600px;
  height: 250px;
  position: relative;

  .zone__moveWindow {
    position: absolute;
    height: 20px;
    top: 0;
    left: 0;
    width: 100%;
  }

  img {
    height: 100%;
  }
}
</style>

