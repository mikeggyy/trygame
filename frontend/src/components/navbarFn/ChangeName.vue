<script setup>
import { people, popupState, config } from '@/stores';
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import InputForPopup from '@/components/popup/InputForPopup.vue';
const handleOk = (name) => {
  config().setName(name.value)
  popupState().setChangeName(false)
  // 創造人物
  people().getPeopleList()
  config().setGameStart()
}
</script>
<template>
  <div class="ChangeName">
    <TitleForPopup :name="`請輸入姓名`" :showCloseBtn="false" />
    <InputForPopup @ok="handleOk" />
  </div>
</template>

<style lang="scss" scoped>
.ChangeName {
  width: 250px;
  height: 84px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  padding: 2px;
}
</style>