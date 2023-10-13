<!-- import SelectForPopup from '@/components/popup/SelectForPopup.vue' -->
<!-- 選擇元件 -->
<script setup>
import { ref } from 'vue';
const emits = defineEmits();
const { dataList } = defineProps({
  dataList: {
    type: Array, // 定义 prop 的类型
    default: [] // 默认值，如果父组件没有传递该 prop
  },
});
const target = ref(dataList[0])
const choose = (value) => {
  target.value = value
}
const checkChoose = () => {
  emits('ok', target.value)
}
</script>
<template>
  <div class="SelectForPopup">
    <div class="zone__list">
      <div class="listItem" v-for="(item, index) in dataList" @click="choose(item)">
        <div :class="target.name == item.name ? 'active' : 'no-active'">{{ item.name }}</div>
      </div>
    </div>
    <div class="zone__decide">
      <div @click="checkChoose">決定</div>
      <div @click="emits('cancel')">取消</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.SelectForPopup {
  width: 100%;
  height: 120px;


  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: flex;

  .zone__list {
    width: 50%;
    overflow-y: auto;
    border: 1px solid rgba(0, 0, 0, 0.664);

    .listItem {
      width: 100%;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .active {
        width: 100%;
        background-color: #00028C;
        color: #fff;
      }
    }
  }
}
</style>