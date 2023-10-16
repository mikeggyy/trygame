<script setup>
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue';
import TalkForPopup from '@/components/popup/TalkForPopup.vue';
import DescriptionForPopup from '@/components/popup/DescriptionForPopup.vue'
import ClickSpaceForPopup from '@/components/popup/ClickSpaceForPopup.vue'
import { config, popupState, people, select, talking } from '@/stores';
import { ref } from 'vue';
const peopleData = ref([])
const isHireCheck = ref(false)
const isReviews = ref(false)
const peopleItem = ref({})
const content = ref('')
const isHireOK = ref(false)
const isLimit = ref(false)
// 檢查招募人數是否達到上限
const checkEmployeesLimit = () => {
  switch (popupState().hireType) {
    case '介紹人':
      if (config().allEmployees.filter(item => item.type == '介紹人').length >=config().introducerLimit) {
        isLimit.value = true
      }
      break;
    case '雜工':
      if (config().allEmployees.filter(item => item.type == '雜工').length >=config().laborerLimit) {
        isLimit.value = true
      }
      break;
    case '保鑣':
      if (config().allEmployees.filter(item => item.type == '保鑣').length >=config().bodyguardLimit) {
        isLimit.value = true
      }
      break;
    case '船長':
      if (config().allEmployees.filter(item => item.type == '保鑣').length >=config().shipManLimit) {
        isLimit.value = true
      }
      break;
  }

}
// 在 setup 函數中進行初始化操作
const populateNewPeopleList = () => {
  peopleData.value = people().peopleList.filter(item => (item.type === popupState().hireType && item.age > 15));
}
const handlePeopleCancel = () => {
  popupState().setHireType('')
}
const handlePeopleOk = (item) => {
  isHireCheck.value = true
  peopleItem.value = item
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
const closeClickSpace = () => {
  popupState().setHireType('')
  config().setEmployees(peopleItem.value)
  people().removePeopleList(peopleItem.value.name)
}
// 初始化時調用
checkEmployeesLimit();
populateNewPeopleList();
</script>
<template>
  <div class="Hire">
    <div class="zone__select" v-show="isHireCheck == false && isLimit == false">
      <TitleForPopup :name="`雇用${popupState().hireType}`" :showCloseBtn="false" />
      <SelectForPopup :dataList="peopleData" @ok="handlePeopleOk" @cancel="handlePeopleCancel" />
    </div>
    <div v-if="isLimit == true">
      <DescriptionForPopup :title="`雇用${popupState().hireType}`" :content="`${popupState().hireType}雇用已達最大限制`"
        @cancel="popupState().setHireType('')" />
    </div>
    <div v-if="isHireCheck == true">
      <TalkForPopup :peopleItem="peopleItem" :talking="content" />
      <div v-if="isHireOK == true">
        <ClickSpaceForPopup @close="closeClickSpace" />
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