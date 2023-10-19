<script setup>
import { ref } from 'vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue';
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import DescriptionForPopup from '@/components/popup/DescriptionForPopup.vue'
import TalkForPopup from '@/components/popup/TalkForPopup.vue'
import { config, popupState, talking } from '@/stores'
const talkingCount = ref(0)
const orderItem = ref({})
const handleSalesOk = (item) => {
  talkingCount.value = 1
  console.log(item);
  orderItem.value = item
  config().setCurrentLocation('room-001')
}
const handleSalesCancel = () => {
  popupState().setBuySales(false)
}
</script>
<template>
  <div class="BuySales">
    <div v-if="config().introducerSize == 0">
      <DescriptionForPopup :title="`買入商品`" :content="`需要介紹人來幫忙買貨`" @cancel="popupState().setBuySales(false)" />
    </div>
    <div v-else class="zone__select">
      <TitleForPopup :name="`買入`" />
      <SelectForPopup :dataList="config().salesList" @ok="handleSalesOk" @cancel="handleSalesCancel" />
    </div>
    <div v-if="talkingCount == 1">
      <TalkForPopup :peopleItem="config().introducerItem"
        :talking="talking().getIntroducerBuySalesTalking(orderItem.name)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.BuySales {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1200;

  .zone__select {
    width: 300px;
    height: 170px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
  }
}
</style>