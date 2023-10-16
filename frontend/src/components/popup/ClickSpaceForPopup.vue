<script setup>
import { ref } from 'vue';
const emits = defineEmits();
const { count } = defineProps({
  count: {
    type: Number, // 定义 prop 的类型
    default: 1 // 默认值，如果父组件没有传递该 prop
  },
});
const clickCount = ref(0)
const addCount = () => {
  clickCount.value = clickCount.value + 1
  if (count == clickCount.value) {
    emits('close')
  }
}
</script>
<template>
  <div class="ClickSpaceForPopup" @click="addCount()">

  </div>
</template>

<style lang="scss" scoped>
.ClickSpaceForPopup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9000;
  cursor: pointer;
}
</style>