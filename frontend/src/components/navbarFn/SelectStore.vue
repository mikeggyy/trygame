<script setup>
import { profession, popupState, config } from '@/stores';
import { ref } from 'vue';
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue'
const professionList = profession().professionlist
const handleCancel = () => {
  popupState().setNewGame(false)
}
const handleOk = (data) => {
  config().setProfession(data.name)
  config().setSalesList(data.commodityList)
  popupState().setNewGame(false)
  popupState().setChangeName(true)
}
const handleClose = () =>{
  popupState().setNewGame(false)
}
</script>

<template>
  <div class="SelectStore">
    <TitleForPopup :name="`選擇要創業的店舖`" @close="handleClose" />
    <SelectForPopup :dataList="professionList" @ok="handleOk" @cancel="handleCancel" />
  </div>
</template>

<style lang="scss" scoped>
.SelectStore {
  width: 250px;
  height: 160px;
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