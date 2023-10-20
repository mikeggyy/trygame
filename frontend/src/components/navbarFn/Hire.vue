<script setup>
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue';
import TalkForPopup from '@/components/popup/TalkForPopup.vue';
import DescriptionForPopup from '@/components/popup/DescriptionForPopup.vue'
import ClickSpaceForPopup from '@/components/popup/ClickSpaceForPopup.vue'
import YesOrNoForPopup from '@/components/popup/YesOrNoForPopup.vue'
import { introducerPush } from '@/unit/toHire.js';
import { config, popupState, people, select, talking } from '@/stores';
import { ref } from 'vue';
const peopleData = ref([])
const isHireCheck = ref(false)
const isReviews = ref(false)
// 選中的人
const peopleItem = ref({})
// 對話內容
const content = ref('')
const isHireOK = ref(false)
// 是否達到招募上限
const isLimit = ref(false)
// 招募限制
const limitLength = ref(0)
// 需要介紹人介紹嗎
const introducerCheck = config().introducerSize > 0 ? ref(true) : ref(false);
// 檢查招募人數是否達到上限
const checkEmployeesLimit = () => {
  switch (popupState().hireType) {
    case '介紹人':
      limitLength.value=config().introducerLimit
      break;
    case '雜工':
      limitLength.value=config().laborerLimit
      break;
    case '保鑣':
      limitLength.value=config().bodyguardLimit
      break;
    case '船長':
      limitLength.value=config().shipManLimit
      break;

  }
  if (config().allEmployees.filter(item => item.type == popupState().hireType).length >= limitLength.value) {
    isLimit.value = true
  }
}
// 在 setup 函數中進行初始化操作
const populateNewPeopleList = () => {
  peopleData.value = people().peopleList.filter(item => (item.type === popupState().hireType && item.age > 15));
}
// 自己招募
const handlePeopleOk = (item) => {
  isHireCheck.value = true
  peopleItem.value = item
}
// 取消招募視窗
const handlePeopleCancel = () => {
  popupState().setHireType('')
}
const handleHireOk = (item) => {
  switch (item.value) {
    case 'hireOK':
      isHireOK.value = true
      content.value = talking().getHireOKTalking()
      break;
    case 'checkMoney':
      content.value = talking().getCheckMoneyTalking(peopleItem.value.pay)
      break;
    case 'reviews':
      isReviews.value = true
      break;
  }
}
const handleHireCancel = () => {
  isHireCheck.value = false
  content.value = ''
}
// 招募完成最後一次對話
const closeClickSpaceHireOK = () => {
  peopleItem.value.profession = popupState().hireType
  config().setEmployees(peopleItem.value)
  people().removePeopleList(peopleItem.value.name)
  popupState().setHireType('')
}
// 請介紹人推薦
const handleYesIntroducer = () => {
  introducerCheck.value = false
  peopleItem.value = introducerPush(popupState().hireType)
  isHireCheck.value = true
}
// 不用介紹人推薦
const handleNoIntroducer = () => {
  introducerCheck.value = false
}

// 初始化時調用
checkEmployeesLimit();
populateNewPeopleList();
</script>
<template>
  <div class="Hire">
    <!-- 超過招募上限 -->
    <div v-if="isLimit == true">
      <DescriptionForPopup :title="`雇用${popupState().hireType}`" :content="`${popupState().hireType}雇用已達最大限制`"
        @cancel="popupState().setHireType('')" />
    </div>
    <!-- 沒超過招募上限 -->
    <div v-else>
      <!-- 介紹人來推薦 -->
      <div v-if="introducerCheck == true">
        <TalkForPopup :peopleItem="config().introducerItem"
          :talking="talking().getIntroducerHelpHireTalking(popupState().hireType)" />
        <YesOrNoForPopup :title="`需要幫忙介紹${popupState().hireType}嗎`" @yes="handleYesIntroducer" @no="handleNoIntroducer" />
      </div>
      <!-- 沒介紹人的話直接選 -->
      <div class="zone__select" v-else-if="isHireCheck == false && isLimit == false">
        <TitleForPopup :name="`雇用${popupState().hireType}`" :showCloseBtn="false" />
        <SelectForPopup :dataList="peopleData" @ok="handlePeopleOk" @cancel="handlePeopleCancel" />
      </div>
      <div v-else-if="isHireCheck == true">
        <TalkForPopup :peopleItem="peopleItem" :talking="content" />
        <div v-if="isHireOK == true">
          <ClickSpaceForPopup @close="closeClickSpaceHireOK" />
        </div>
        <div class="zone__check" v-if="isHireOK == false">
          <TitleForPopup :name="`雇用${popupState().hireType}`" :showCloseBtn="false" />
          <div>
            <SelectForPopup :dataList="select().hireSelect" @ok="handleHireOk" @cancel="handleHireCancel" />
          </div>
          <div v-if="isReviews == true">
            <DescriptionForPopup :title="`傳聞`" :content="peopleItem.description" @cancel="isReviews = false" />
          </div>
        </div>
      </div>
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

  .zone__select {
    position: absolute;
    top: 180px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    width: 280px;
    height: 160px;
  }

  .zone__check {
    position: absolute;
    top: 80px;
    left: 500px;
    background-color: #fff;
    width: 280px;
    height: 160px;
  }
}
</style>