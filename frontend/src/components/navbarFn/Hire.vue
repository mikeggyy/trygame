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
// 在 setup 函數中進行初始化操作
const populateNewPeopleList = () => {
  peopleData.value = people().peopleList.filter(item => (item.type === popupState().hireStatus && item.age > 15));
}
const handlePeopleCancel = () => {
  popupState().setHireStatus('')
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
  popupState().setHireStatus('')
  config().setEmployees(peopleItem.value)
}
// 初始化時調用
populateNewPeopleList();
</script>
<template>
  <div class="Hire">
    <div class="zone__select" v-show="isHireCheck == false">
      <TitleForPopup :name="`雇用${popupState().hireStatus}`" :showCloseBtn="false" />
      <SelectForPopup :dataList="peopleData" @ok="handlePeopleOk" @cancel="handlePeopleCancel" />
    </div>
    <div v-if="isHireCheck == true">
      <TalkForPopup :peopleItem="peopleItem" :talking="content" />
      <div v-if="isHireOK == true">
        <ClickSpaceForPopup @close="closeClickSpace" />
      </div>
      <div class="zone__check" v-if="isHireOK == false">
        <TitleForPopup :name="`雇用${popupState().hireStatus}`" :showCloseBtn="false" />
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