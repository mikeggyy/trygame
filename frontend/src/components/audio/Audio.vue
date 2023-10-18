<script setup>
import { ref, onMounted } from 'vue';

const audioPlayer = ref(null);

const playMusic = () => {
  if (audioPlayer.value) {
    audioPlayer.value.play();
  }
};

onMounted(() => {
  playMusic()
  // 此處你也可以調用 playMusic()，或在按鈕點擊事件中調用它，取決於你的需求
});
playMusic()
</script>
<template>
  <div class="Audio">
    <audio ref="audioPlayer" src="/audio/winter.mp3" loop></audio>
  </div>
</template>

<style lang="scss" scoped></style>