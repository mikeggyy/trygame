<script setup>
import { ref, watch } from 'vue';
import { config, people, select, popupState, talking } from '@/stores'
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import TalkForPopup from '@/components/popup/TalkForPopup.vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue'
import YesOrNoForPopup from '@/components/popup/YesOrNoForPopup.vue';
import ChoiceMoneyForPopup from '@/components/popup/ChoiceMoneyForPopup.vue'
import DescriptionForPopup from '@/components/popup/DescriptionForPopup.vue'
import ClickSpaceForPopup from '@/components/popup/ClickSpaceForPopup.vue';
// 遊戲進行順序
const gameCount = ref(1)
// 有介紹信嗎
const letter = ref(false)
// 選擇對象將軍
const targetShogunName = ref('')
// 將軍資料
const shogunItem = ref(null)
// 對象禮物
const targetGift = ref('')
// 賄款
const blackMoney = ref(0)
// 出門前選項
const preMeetSelect = ref(null)
// 見到將軍時的選項
const meetShogunSelect = ref(null)
// 將軍說話
const meetShogunTalking = ref(null)
// 更新組件選項
const selectForPopupKey = ref(0);
const init = () => {
  preMeetSelect.value = select().preMeetOfficialSelect.filter(item => item.limit != '有禮物');
  meetShogunSelect.value = select().meetShogunSelect
  meetShogunTalking.value = talking().getMeetShogunTalking()
}
init()
watch(() => targetGift.value, (newValue) => {
  if (newValue != '') {
    preMeetSelect.value = select().preMeetOfficialSelect.filter(item => item.limit != '沒禮物');
  }
});
// 選擇要拜訪的將軍
const handleShogunPositionSelectOk = (name) => {
  targetShogunName.value = name.value
  shogunItem.value = people().peopleList.find(item => item.profession == targetShogunName.value)
  gameCount.value = 2
}
// 確認外出選擇
const handlePreMeetOfficialSelectOk = (name) => {
  switch (name.value) {
    case '出門拜訪':
      // 如果不認識將軍 介紹人會出來詢問
      if (shogunItem.value.doYouKnow == false && config().introducerSize > 0) {
        gameCount.value = 5
      } else {
        goToMeetShogun()
      }
      break;
    case '決定禮物':
      gameCount.value = 3
      break;
    case '確認禮物':
      gameCount.value = 4
      break;
  }
}
// 選擇禮物
const handleGiftSelectOk = (name) => {
  targetGift.value = name.value
  popupState().setChoiceMoney(true)
}
// 選擇金額
const handleDecideMoney = (money) => {
  popupState().setChoiceMoney(false)
  blackMoney.value = money
  gameCount.value = 2
}
// 答應介紹人幫忙寫介紹信
const handleLetterYes = () => {
  letter.value = true
  gameCount.value = 6
}
// 拜訪將軍
const goToMeetShogun = () => {
  config().setCurrentLocation('shogunRoom-001')
  people().setPeopleListDoYouKnow(shogunItem.value.name)
  if (targetGift.value == '') {
    meetShogunSelect.value = meetShogunSelect.value.filter(item => item.limit != '遞送禮物');
  }
  if (letter.value == false) {
    meetShogunSelect.value = meetShogunSelect.value.filter(item => item.limit != '給介紹信');
  }
  gameCount.value = 7
}
// 選擇見面選項
const meetShogunOk = (name) => {
  switch (name.value) {
    case '給介紹信':
      meetShogunSelect.value = meetShogunSelect.value.filter(item => item.limit != '給介紹信');
      meetShogunTalking.value = talking().getShogunTakeLetterTalking()
      people().setPeopleListHowMuchLike(shogunItem.value.name, config.introducerItem.ability * 2)
      selectForPopupKey.value += 1;
      break;
    case '問事情':
      meetShogunSelect.value = meetShogunSelect.value.filter(item => item.limit != '問事情');
      meetShogunTalking.value = talking().getShogunAskSomeThingTalking()
      selectForPopupKey.value += 1;
      break;
    case '遞送禮物':
      let random = Math.floor(Math.random() * (1001 + shogunItem.value.howMuchLike)) + 1;
      if (random <= 1000) {
        meetShogunTalking.value = talking().getShogunRejectGiftTalking(targetGift.value)
      } else {
        meetShogunTalking.value = talking().getShogunAcceptGiftTalking(targetGift.value)
        meetShogunSelect.value = meetShogunSelect.value.filter(item => item.limit != '遞送禮物');
        people().setPeopleListHowMuchLike(shogunItem.value.name, Math.floor(blackMoney.value / 2))
        selectForPopupKey.value += 1;
        config().setTotalAssets(-blackMoney)
      }
      break;
    case '提出捐贈':
      meetShogunTalking.value = talking().getShogunMakeDonatTalking()
      popupState().setChoiceMoney(true)
      break;
    case '離開府邸':
      meetShogunCancel()
      break;
  }
}
// 提交捐贈金額
const handleDonatMoney = (money) => {
  people().setPeopleListHowMuchLike(shogunItem.value.name, Math.floor(money / 100))
  meetShogunTalking.value = talking().getShogunGetDonatTalking(targetGift.value)
  popupState().setChoiceMoney(false)
  config().setTotalAssets(-money)
  config().setFame(Math.floor(money / 500))
}
// 離開將軍府邸
const meetShogunCancel = () => {
  config().setCurrentLocation('home-001')
  popupState().setShogun(false)
}

</script>
<template>
  <div class="Shogun zone__windows__01">
    <div v-if="gameCount == 1">
      <div class="zone__select__01">
        <TitleForPopup :name="`選擇要拜訪的將軍`" />
        <SelectForPopup :dataList="select().shogunPositionSelect" @ok="handleShogunPositionSelectOk"
          @cancel="popupState().setShogun(false)" />
      </div>
    </div>
    <div v-if="gameCount == 2">
      <div class="zone__select__01">
        <TitleForPopup :name="`${targetShogunName}的府邸`" />
        <SelectForPopup :dataList="preMeetSelect" @ok="handlePreMeetOfficialSelectOk" @cancel="gameCount = 1" />
      </div>
    </div>
    <div v-if="gameCount == 3">
      <div class="zone__select__01">
        <TitleForPopup :name="`給${targetShogunName}的一點小禮物`" />
        <SelectForPopup :dataList="select().giftSelect" @ok="handleGiftSelectOk" @cancel="gameCount = 2" />
      </div>
      <div v-if="popupState().choiceMoney == true">
        <ChoiceMoneyForPopup :title="`設定金額`" :MaxlimitMoney="400" @decideMoney="handleDecideMoney" />
      </div>
    </div>
    <div v-if="gameCount == 4">
      <DescriptionForPopup :title="`確認禮物`" :content="`${targetGift}( 底部有${blackMoney}両 )`" @cancel="gameCount = 2" />
    </div>
    <div v-if="gameCount == 5">
      <TalkForPopup :peopleItem="config().introducerItem"
        :talking="talking().getIntroducerHelpsWriteTheLetterTalking()" />
      <YesOrNoForPopup :title="`要請介紹人幫忙寫介紹信嗎嗎`" @yes="handleLetterYes" @no="goToMeetShogun" />
    </div>
    <div v-if="gameCount == 6">
      <TalkForPopup :peopleItem="config().introducerItem"
        :talking="talking().getIntroducerHelpsWriteTheLetterYesTalking()" />
      <ClickSpaceForPopup @close="goToMeetShogun" />
    </div>
    <div v-if="gameCount >= 7">
      <TalkForPopup :peopleItem="shogunItem" :talking="meetShogunTalking" />
      <div class="zone__select__01">
        <TitleForPopup :name="`要做什麼呢`" />
        <SelectForPopup :key="selectForPopupKey" :dataList="meetShogunSelect" @ok="meetShogunOk"
          @cancel="meetShogunCancel" />
      </div>
      <div v-if="popupState().choiceMoney == true">
        <ChoiceMoneyForPopup :title="`設定金額`" :MinlimitMoney="1000" :MaxlimitMoney="20000"
          @decideMoney="handleDonatMoney" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Shogun {}
</style>