<script setup>
import { config, popupState, people, talking } from '@/stores';
import { ref } from 'vue';
import ClickSpaceForPopup from '@/components/popup/ClickSpaceForPopup.vue'
import YesOrNoForPopup from '@/components/popup/YesOrNoForPopup.vue'
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue';
import { introducerPush } from '@/unit/toHire.js';
import TalkForPopup from '@/components/popup/TalkForPopup.vue';
// 造價
const money= ref(0);
// 選中的人
const peopleItem = ref({});
// 對話內容
const content = ref('');
// 結束建造事件
const closeThisEvent = ref(false);
// 確定使用這個人
const isHireOK = ref(false);
// 建造天數
const buildDay = ref(0);
// 需要介紹人介紹嗎
const introducerCheck = config().introducerSize > 0 ? ref(true) : ref(false);
// 確認使用這個人
const isHireCheck = ref(false);
// 金錢數量 建造工時
const initData = () =>{
    switch (popupState().buildType) {
        case '建造船隻':
            money.value = 500+peopleItem.value.pay
            buildDay.value = 40
            break;
        case '建造庭院':
            money.value = 8000+peopleItem.value.pay
            buildDay.value = 90
            break;
        case '建造倉庫':
            money.value = 250+peopleItem.value.pay
            buildDay.value = 20
            break;
    }
}

// 需要介紹
const handleYesIntroducer = ()=>{
    introducerCheck.value = false
    peopleItem.value = introducerPush("木工")
    initData()
    isHireCheck.value = true
    content.value = talking().getWoodWorkBuildCheckTalking(popupState().buildType,money.value)
    isHireOK.value = true
}
// 不需要介紹
const handleNoIntroducer = ()=>{
    introducerCheck.value = false
}
// 自己選木工
const handleWoodWorkOk = (item)=>{
    peopleItem.value = item
    initData()
    isHireCheck.value = true
    content.value = talking().getWoodWorkBuildCheckTalking(popupState().buildType,money.value)
    isHireOK.value = true
}
// 取消選木工
const handleWoodWorkCancel = ()=>{
    popupState().setBuildType('')
}
const checkAndSetBuildDay = () =>{
    // 檢查有沒有重複的天數
    let count = 1;
    let isUnique = false;
    while (!isUnique) {
        isUnique = true;
        for (const buildItem of config().buildingList) {
            if (buildItem.day === buildDay.value) {
                isUnique = false;
                buildDay.value += count;
                count++;
                break;
            }
        }
    }
}
// 建造
const handleYesBuild = ()=>{
    // 切換對話
    content.value = talking().getWoodWorkBuildOkTalking(buildDay.value)
    // 交易成功加好感
    people().setPeopleListHowMuchLike(peopleItem.value.name,100)
    // 將木工狀態設為建造中
    people().setPeopleListStatus(peopleItem.value.name,'建造中')
    // 扣金主錢
    config().setTotalAssets(-money.value)
    checkAndSetBuildDay();
    // 項目進入建設清單
    config().addBuildItem(peopleItem.value.name,popupState().buildType,buildDay.value,peopleItem.value.ability)
    closeThisEvent.value=true
}
// 不建造
const handleNoBuild = ()=>{
    // 切換對話
    content.value = talking().getWoodWorkBuildNoTalking()
    people().setPeopleListHowMuchLike(peopleItem.value.name,-100)
    closeThisEvent.value=true
}
// 結束此事件
const closeWoodWorkMan = ()=>{
    popupState().setBuildType('')
}

</script>
<template>
    <div class="Build">
      <!-- 介紹人來推薦 -->
      <div v-if="introducerCheck == true">
        <TalkForPopup :peopleItem="config().introducerItem"
          :talking="talking().getIntroducerHelpHireTalking('木工')" />
        <YesOrNoForPopup :title="`需要幫忙介紹木工嗎`" @yes="handleYesIntroducer" @no="handleNoIntroducer" />
      </div>
      <!-- 沒有介紹人的話 -->
      <div v-else-if="isHireCheck == false" class="zone__select">
        <TitleForPopup :name="`雇用木工`" :showCloseBtn="false" />
        <SelectForPopup :dataList="people().woodWorkManList" @ok="handleWoodWorkOk" @cancel="handleWoodWorkCancel" />
      </div>
      <div v-else-if="isHireCheck == true">
        <TalkForPopup :peopleItem="peopleItem" :talking="content" />
        <div v-if="isHireOK == true">
            <YesOrNoForPopup :title="`請他${popupState().buildType}嗎?`" @yes="handleYesBuild" @no="handleNoBuild" />
        </div>
        <div v-if="closeThisEvent == true">
            <ClickSpaceForPopup @close="closeWoodWorkMan" />
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.Build{
    width: 100%;
    height: 100vh;
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
}
</style>