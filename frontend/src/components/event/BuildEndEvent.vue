<script setup>
import { ref, watch } from 'vue';
import { config, popupState, people, talking } from '@/stores';
import TalkForPopup from '@/components/popup/TalkForPopup.vue';
import YesOrNoForPopup from '@/components/popup/YesOrNoForPopup.vue';
import ChoiceMoneyForPopup from '@/components/popup/ChoiceMoneyForPopup.vue'
import ClickSpaceForPopup from '@/components/popup/ClickSpaceForPopup.vue';
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import InputForPopup from '@/components/popup/InputForPopup.vue';
const woodWorkTalking = ref('')
const isClickSpace = ref(false)
// 哪位木工
const woodWorkManItem = ref('')
const isYesOrNo = ref(true)
// 船隻完成故事線
const shipCount = ref(0)
// 打開船隻完成路線
const shipRode = ref(false)
// 船隻名稱
const shipName = ref('')
// 工匠能力
const buildAbility = ref(0)
// 木工資料
woodWorkManItem.value = people().peopleList.find((item) => item.name === popupState().buildEndItem.builder && item.type == "木工");
// 完工後對話
woodWorkTalking.value = talking().getWoodWorkBuildEndTalking(popupState().buildEndItem.name)
// 判斷是否為船隻建造完成
if (popupState().buildEndItem.type == '建造船隻') {
  shipRode.value = true
  shipCount.value = 1
  woodWorkTalking.value = talking().getWoodWorkBuildEndShipTalking()
  isYesOrNo.value = false
}
console.log();
// 能力注入
buildAbility.value = (40 + woodWorkManItem.value.ability) / 100;
// 要給禮金
const handleYes = () => {
  popupState().setChoiceMoney(true)
}
// 不給禮金
const handleNo = () => {
  pushData()
  popupState().setBuildEndItem('')
}
// 給完禮金
const handleDecideMoney = () => {
  woodWorkTalking.value = talking().getWoodWorkBuildEndTakeMoneyTalking()
  isClickSpace.value = true
  popupState().setChoiceMoney(false)
  isYesOrNo.value = false
}
// 結束事件
const closeWoodWorkEndEvent = () => {
  pushData()
  popupState().setBuildEndItem('')

}
// 前往船隻取名
const goToGiveShipName = () => {
  shipCount.value = 2
}
// 名字取完後
const handleShipNameOk = (name) => {
  shipCount.value = 3
  isYesOrNo.value = true
  woodWorkTalking.value = talking().getWoodWorkBuildEndGiveNameTalking(name.value)
  shipName.value = name
}
const pushData = () => {
  switch (popupState().buildEndItem.type) {
    case '建造船隻':
      config().setShipList({
        name: shipName.value,
        type: '船隻',
        size: Math.round(10000 * (buildAbility.value / 2)),
        speed: Math.round(100 * (buildAbility.value / 2)),
      })
      break;
    case '建造庭院':
      config().houseList.push({
        name: '庭院',
        type: '庭院',
        fame: Math.round(100 * (buildAbility.value / 2)),
      });
      break;
    case '建造倉庫':
      config().warehouseList.push({
        name: '倉庫',
        type: '倉庫',
        size: Math.round(50000 * (buildAbility.value / 2)),
      });
      break;
  }
}
</script>
<template>
  <div class="BuildEndEvent">
    <div v-if="shipRode == true">
      <TalkForPopup :peopleItem="woodWorkManItem" :talking="woodWorkTalking" />
      <div v-if="shipCount == 1">
        <ClickSpaceForPopup @close="goToGiveShipName" />
      </div>
      <div v-if="shipCount == 2" class="inputNmae">
        <TitleForPopup :name="`給船隻取名`" :showCloseBtn="false" />
        <InputForPopup @ok="handleShipNameOk" />
      </div>
    </div>
    <div v-else>
      <TalkForPopup :peopleItem="woodWorkManItem" :talking="woodWorkTalking" />
    </div>
    <div v-if="isYesOrNo == true">
      <YesOrNoForPopup :title="`要給禮金嗎`" @yes="handleYes" @no="handleNo" />
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
.BuildEndEvent {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .inputNmae {
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
}
</style>