<script setup>
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue'
import { config, popupState, people } from '@/stores';
import { ref } from 'vue';
const peopleData = ref([])
// 在 setup 函數中進行初始化操作
const populateNewPeopleList = () => {
  peopleData.value = people().peopleList.filter(item => (item.type === popupState().hireStatus && item.age > 15));
}
const handleCancel = () => {
  popupState().setHireStatus('')
}
const handleOk = (item) => {
  popupState().setHireStatus('')
  config().setSelectTarget(item)
  console.log(item);
}
// 初始化時調用
populateNewPeopleList();
</script>
<template>
  <div class="Hire">
    <div class="container">
      <TitleForPopup :name="`雇用${popupState().hireStatus}`" :showCloseBtn="false" />
      <SelectForPopup :dataList="peopleData" @ok="handleOk" @cancel="handleCancel" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Hire {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;

  .container {
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    width: 280px;
    height: 160px;
  }
}
</style>