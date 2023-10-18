<script setup>
// import YesOrNoForPopup from '@/components/popup/YesOrNoForPopup.vue';
const emits = defineEmits();
const { title } = defineProps({
  title: {
    type: String, // 定义 prop 的类型
    default: '' // 默认值，如果父组件没有传递该 prop
  },
});
</script>
<template>
  <div class="YesOrNoForPopup">
    <div class="zone__content">
      <div class="title">{{ title }}</div>
      <div class="box__btn">
        <div class="yes" @click="emits('yes')">確定</div>
        <div class="no" @click="emits('no')">取消</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.YesOrNoForPopup {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;

  .zone__content {
    width: 300px;
    height: 100px;
    background-color: #fff;
    padding: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    .title {
      width: 100%;
      text-align: center;
      background-color: #B2D0F8;
    }

    .box__btn {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      padding-top: 20px;

      div {
        width: 80px;
        height: 35px;
        background-color: #C8C7C8;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, .6), inset 2px 1px 2px 1px rgba(255, 255, 255, 1);

        &:hover {
          padding-top: 3px;
          border: 1px solid #000;
        }
      }
    }
  }
}
</style>