<script setup>
import { ref } from 'vue';
import { popupState, config, talking, select } from '@/stores'
import TalkForPopup from '@/components/popup/TalkForPopup.vue';
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue'
import DescriptionForPopup from '@/components/popup/DescriptionForPopup.vue'
import ChoiceMoneyForPopup from '@/components/popup/ChoiceMoneyForPopup.vue'
// 是否開啟警告
const isOpenDescription = ref(true)
// 傳喚清單
const meetList = ref([])
// 傳喚對象
const meetItem = ref({})
// 是否確認開始指令視窗
const isMeetCheck = ref(false)
// 該傳喚人員可用對話類型
const filterSelectList = ref([])
// 執行哪個指令
const executeValue = ref('')
// 對話內容
const currentTalking = ref(null)
// 該員工在哪個陣列
const employeeIndex = ref(null)
// 是否是私房錢
const isPrivateMoney = ref(false)
// 最大給予金額
const MaxlimitMoney = ref(null)
// 最小給予金額
const MinlimitMoney = ref(null)
// 初始對話
currentTalking.value = talking().getMeetStaffTalking()
// 篩選可對話類型
filterSelectList.value = select().meetSelect.filter(item => item.limit == popupState().meetStaffType || item.limit == null)

// 檢查是否有該類型人員
if (config().allEmployees.some((item) => item.type == popupState().meetStaffType)) {
  meetList.value = config().allEmployees.filter(employee => employee.type == popupState().meetStaffType)
  if (meetList.value.length == 1) {
    meetItem.value = meetList.value[0]
  }
} else {
  isOpenDescription.value = false
}
// 開啟對話視窗
const handleMeetOk = (item) => {
  isMeetCheck.value = true
  meetItem.value = item
}
// 關閉對話視窗
const handleMeetCancel = () => {
  popupState().setMeetStaffType('')
}
// 選擇指令
const handleChoiceOk = (item) => {
  executeValue.value = item
  switch (item.value) {
    case '升大掌櫃':
      console.log();
      break;
    case '升掌櫃':
      console.log();
      break;
    case '讓他出海':
      console.log();
      break;
    case '幫忙走私':
      console.log();
      break;
    case '暗殺競爭對手':
      console.log();
      break;
    case '販賣走私':
      console.log();
      break;
    case '給小費':
      isPrivateMoney.value = true
      MinlimitMoney.value = 1
      MaxlimitMoney.value = 50
      popupState().setChoiceMoney(true)
      break;
    case '加薪':
      isPrivateMoney.value = false
      MinlimitMoney.value = meetItem.value.pay
      MaxlimitMoney.value = meetItem.value.paylimit
      popupState().setChoiceMoney(true)
      break;
    case '讓他去旅行':
      console.log();
      break;
    case '解雇':
      console.log();
      break;
  }
}
// 關閉指令視窗
const handleChoiceCancel = () => {
  if (meetList.value.length == 1) {
    popupState().meetStaffType = ''
  } else {
    isMeetCheck.value = false
  }
}
// 金額設定完後
const handleDecideMoney = (num) => {
  popupState().setChoiceMoney(false)
  employeeIndex.value = config().allEmployees.findIndex(employee => employee.name == meetItem.value.name);
  switch (executeValue.value.value) {
    case '給小費':
      currentTalking.value = talking().getTipTalking()
      config().setPrivateMoney(-num)
      // 找到符合條件的員工，修改 howMuchLike
      config().setHowMuchLike({ index: employeeIndex.value, value: num });
      break;
    case '加薪':
      currentTalking.value = talking().getAddPayTalking()
      // 找到符合條件的員工，修改 howMuchLike
      config().setPay({ index: employeeIndex.value, value: num });
      break;
  }
}

</script>
<template>
  <div class="MeetStaff">
    <div v-if="isOpenDescription == false">
      <DescriptionForPopup :title="`試圖傳喚${popupState().meetStaffType}`" :content="`醒，你還沒有${popupState().meetStaffType}`"
        @cancel="popupState().setMeetStaffType('')" />
    </div>
    <div v-else>
      <div v-if="meetList.length > 1 && isMeetCheck != true" class="selectMeet">
        <TitleForPopup :name="`傳喚${popupState().meetStaffType}`" />
        <SelectForPopup :dataList="meetList" @ok="handleMeetOk" @cancel="handleMeetCancel" />
      </div>
      <div v-if="meetList.length == 1 || isMeetCheck == true" class="">
        <TalkForPopup :peopleItem="meetItem" :talking="currentTalking" />
        <div class="zone__check">
          <TitleForPopup :name="`傳喚${popupState().hireType}`" :showCloseBtn="false" />
          <SelectForPopup :dataList="filterSelectList" @ok="handleChoiceOk" @cancel="handleChoiceCancel" />
        </div>
      </div>
      <div v-if="popupState().choiceMoney == true">
        <ChoiceMoneyForPopup :MaxlimitMoney="MaxlimitMoney" :MinlimitMoney="MinlimitMoney"
          @decideMoney="handleDecideMoney" :isPrivateMoney="isPrivateMoney" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.MeetStaff {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1500;
  background-color: rgba(0, 0, 0, .5);

  .selectMeet {
    width: 250px;
    height: 160px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    padding: 2px;
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