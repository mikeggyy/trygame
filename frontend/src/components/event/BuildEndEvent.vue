<script setup>
import { ref,watch } from 'vue';
import { config, popupState, people, talking } from '@/stores';
import TalkForPopup from '@/components/popup/TalkForPopup.vue';
import YesOrNoForPopup from '@/components/popup/YesOrNoForPopup.vue';
import ChoiceMoneyForPopup from '@/components/popup/ChoiceMoneyForPopup.vue'
import ClickSpaceForPopup from '@/components/popup/ClickSpaceForPopup.vue';

const woodWorkTalking = ref('')
const isClickSpace= ref(false)
// 哪位木工
const woodWorkManItem = ref('')
const isYesOrNo = ref(true)

// 木工資料
woodWorkManItem.value = people().peopleList.find((item) => item.name === popupState().buildEndItem.builder && item.type=="木工");
// 完工後對話
woodWorkTalking.value = talking().getWoodWorkBuildEndTalking(popupState().buildEndItem.name)

// 要給禮金
const handleYes = () =>{
  popupState().setChoiceMoney(true)
}
// 不給禮金
const handleNo = () =>{
  popupState().setBuildEndItem('')
}
// 給完禮金
const handleDecideMoney = () =>{
  woodWorkTalking.value = talking().getWoodWorkBuildEndTakeMoneyTalking()
  isClickSpace.value=true
  popupState().setChoiceMoney(false)
  isYesOrNo.value = false
}
// 結束事件
const closeWoodWorkEndEvent = () =>{
  popupState().setBuildEndItem('')
}
</script>
<template>
  <div class="BuildEndEvent">
    <div>
      <TalkForPopup :peopleItem="woodWorkManItem" :talking="woodWorkTalking"/>
      <div v-if="isYesOrNo == true">
        <YesOrNoForPopup :title="`要給禮金嗎`" @yes="handleYes" @no="handleNo" />
      </div>
    </div>
    <div v-if="popupState().choiceMoney == true">
      <ChoiceMoneyForPopup @decideMoney="handleDecideMoney" />
    </div>
    <div v-if="isClickSpace == true">
      <ClickSpaceForPopup @close="closeWoodWorkEndEvent" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.BuildEndEvent{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>