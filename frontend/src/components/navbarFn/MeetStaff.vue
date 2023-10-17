<script setup>
import { ref } from 'vue';
import { popupState, config,talking,select } from '@/stores'
import TalkForPopup from '@/components/popup/TalkForPopup.vue';
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue'
import DescriptionForPopup from '@/components/popup/DescriptionForPopup.vue'
const isOpen = ref(true)
const meetList = ref([])
const meetItem = ref({})
const isMeetCheck = ref(false)
const filterSelectList = ref([])
filterSelectList.value = select().meetSelect.filter(item => item.limit == popupState().meetStaffType || item.limit == null)

// 檢查是否有該類型人員
if (config().allEmployees.some((item) => item.type == popupState().meetStaffType)) {
  meetList.value = config().allEmployees.filter(employee => employee.type == popupState().meetStaffType)
  if(meetList.value.length ==1){
    meetItem.value = meetList.value[0]
  }
} else {
  isOpen.value = false
}
const handleMeetOk = (item) => {
  isMeetCheck.value = true
  meetItem.value = item
}
const handleMeetCancel = () => {
  popupState().setMeetStaffType('')
}
const handleChoiceOk = ()=>{

}
const handleChoiceCancel = () =>{
  if(meetList.value.length == 1){
    popupState().meetStaffType = ''
  }else{
    isMeetCheck.value = false
  }
}
</script>
<template>
  <div class="MeetStaff">
    <div v-if="isOpen == false">
      <DescriptionForPopup :title="`試圖傳喚${popupState().meetStaffType}`" :content="`醒，你還沒有${popupState().meetStaffType}`"
        @cancel="popupState().setMeetStaffType('')" />
    </div>
    <div v-else>
      <div v-if="meetList.length > 1 && isMeetCheck != true" class="selectMeet">
        <TitleForPopup :name="`傳喚${popupState().meetStaffType}`" />
        <SelectForPopup :dataList="meetList" @ok="handleMeetOk" @cancel="handleMeetCancel" />
      </div>
      <div v-if="meetList.length == 1 || isMeetCheck == true" class="">
        <TalkForPopup :peopleItem="meetItem" :talking="talking().getMeetStaffTalking()" />
        <div class="zone__check">
          <TitleForPopup :name="`雇用${popupState().hireType}`" :showCloseBtn="false" />
          <SelectForPopup :dataList="filterSelectList" @ok="handleChoiceOk" @cancel="handleChoiceCancel" />
        </div>
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