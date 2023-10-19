<script setup>
// import MoveMoney from '@/components/popup/MoveMoney.vue';
import ChoiceMoneyForPopup from '@/components/popup/ChoiceMoneyForPopup.vue'
import { config, popupState } from '@/stores';
import { ref, watch } from 'vue';
// 資金移動類型
const moveType = ref('')
// 最大可移動資金
const MaxlimitMoney = ref(0)
// 錢從哪扣
const isPrivateMoney = ref(false)
moveType.value = popupState().moveMoney
if (moveType.value == '藏私房錢') {
  MaxlimitMoney.value = config().totalAssets
  isPrivateMoney.value = false
} else if (moveType.value == '返回金主') {
  MaxlimitMoney.value = config().privateMoney
  isPrivateMoney.value = true
}
watch(() => popupState().choiceMoney, (newValue, oldValue) => {
  if (newValue === false) {
    popupState().moveMoney = ''
  }
});
const handleDecideMoney = (money) => {
  console.log(moveType.value);
  switch (moveType.value) {
    case '藏私房錢':
      config().setTotalAssets(-money)
      config().setPrivateMoney(money)
      break;
    case '返回金主':
      config().setTotalAssets(money)
      config().setPrivateMoney(-money)
      break;
  }
  popupState().setChoiceMoney(false)
}
popupState().setChoiceMoney(true)
</script>
<template>
  <div class="MoveMoney">
    <div class="">
      <ChoiceMoneyForPopup :title="moveType" :MaxlimitMoney="MaxlimitMoney" :isPrivateMoney="isPrivateMoney"
        @decideMoney="handleDecideMoney" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.MoveMoney {
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 500;
  background-color: rgba(0, 0, 0, .5);
}
</style>