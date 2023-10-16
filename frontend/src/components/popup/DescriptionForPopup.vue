<script setup>
const emits = defineEmits();
const { content, title } = defineProps({
  content: {
    type: String, // 定义 prop 的类型
    default: '' // 默认值，如果父组件没有传递该 prop
  },
  title: {
    type: String, // 定义 prop 的类型
    default: '' // 默认值，如果父组件没有传递该 prop
  },
});
</script>
<template>
  <div class="DescriptionForPopup" @click="emits('cancel')">
    <div class="zone__content">
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.DescriptionForPopup {
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .4);
  cursor: pointer;

  .zone__content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 300px;
    height: fit-content;
    margin: auto;
    padding: 2px;
    background-color: #fff;

  }

  .title {
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
  }

  .content {
    padding: 5px;
    background-color: #fff;
    color: #000;
  }
}
</style>