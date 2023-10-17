<script setup>
// import TitleForPopup from '@/components/popup/TitleForPopup.vue';
const emits = defineEmits();
const { name, showCloseBtn } = defineProps({
  name: {
    type: String, // 定义 prop 的类型
    default: '' // 默认值，如果父组件没有传递该 prop
  },
  showCloseBtn: {
    type: Boolean,
    default: true
  },
});
</script>
<template>
  <div class="PopupTitle">
    <div>{{ name }}</div>
    <div v-if="showCloseBtn == true" class="close" @click="emits('close')"><img src="../../assets/images/icon/close.png" alt=""></div>
  </div>
</template>

<style lang="scss" scoped>
.PopupTitle {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  background-color: #000494;
  color: #fff;
  padding-left: 5px;
  padding-right: 5px;

  .close {
    width: 15px;
    height: 15px;
    cursor: pointer;

    img {
      width: 100%;
      font-size: 0;
    }
  }
}
</style>