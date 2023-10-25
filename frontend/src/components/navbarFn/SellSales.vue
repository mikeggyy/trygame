<script setup>
import { ref } from 'vue';
import SelectForPopup from '@/components/popup/SelectForPopup.vue';
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import ClickSpaceForPopup from '@/components/popup/ClickSpaceForPopup.vue';
import DescriptionForPopup from '@/components/popup/DescriptionForPopup.vue'
import TalkForPopup from '@/components/popup/TalkForPopup.vue'
import YesOrNoForPopup from '@/components/popup/YesOrNoForPopup.vue'
import { config, popupState, talking, people, product } from '@/stores'
// 對話數量來控制進度
const talkingCount = ref(0)
// 最小可賣出商品數量
const minOrderCount = ref(100)
const isNotEnoughOrder = ref(false)
// 賣出商品
const orderItem = ref({})
// 黑市商人
const blackMarketeerItem = ref({})
const blackTalking = ref(null)
// 賣出確定
const handleSalesOk = (item) => {
  orderItem.value = item
  if (item.value <= minOrderCount.value) {
    isNotEnoughOrder.value = true
    return
  }
  talkingCount.value = 1

}
// 黑市貨物數量
const blackCount = ref(0)
// 貨物價格
const blackMoney = ref(0)
// 賣出取消
const handleSalesCancel = () => {
  popupState().setSellSales(false)
}
// 關閉介紹人對話
const closeIntroducerTalking = () => {
  // 隨機黑市商人
  let randomBlackValue = Math.floor(Math.random() * 10) + 1;
  blackMarketeerItem.value = people().blackMarketeerList.find(person => person.id == randomBlackValue);
  // 隨機黑市商品數量
  blackCount.value = Math.floor(Math.random() * (orderItem.value.value - minOrderCount.value)) + minOrderCount.value;
  // 好感度影響最大價格
  let blackHowMuchLike = ((1100 - blackMarketeerItem.value.howMuchLike) / 10000) + 0.9
  // 黑市價格 最大+最小*好感/2 *商品數量
  blackMoney.value = Math.ceil((((orderItem.value.minMoney + orderItem.value.averageMoney) * blackHowMuchLike) / 2) * blackCount.value);
  // 黑市商人對話
  blackTalking.value = talking().getBlackMarketeerBuySalesTalking(blackCount.value, orderItem.value.name, blackMoney.value)
  talkingCount.value = 2
  config().setCurrentLocation('room-001')
}
// 賣出商品
const handleYes = () => {
  // 切換對話
  blackTalking.value = talking().getBlackMarketeerSellSalesOKTalking()
  // 交易成功加好感
  people().setPeopleListHowMuchLike(blackMarketeerItem.value.name, 100)
  // 扣金主錢
  config().setTotalAssets(blackMoney.value)
  // 增加商品數量
  config().addSalesList(orderItem.value.name, -blackCount.value)
  talkingCount.value = 3
}
// 不賣出商品
const handleNo = () => {
  blackTalking.value = talking().getBlackMarketeerSellSalesNoTalking()
  // 交易失敗扣好感
  people().setPeopleListHowMuchLike(blackMarketeerItem.value.name, -100)
  talkingCount.value = 3
}
// 結束與黑市商人交易
const closeBlackMarketeerTalk = () => {
  // 切換場景
  config().setCurrentLocation('home-001')
  popupState().sellSales = false
}
const notEnoughOrder = () => {
  isNotEnoughOrder.value = false
}
</script>
<template>
  <div class="SellSales">
    <div v-if="config().introducerSize == 0">
      <DescriptionForPopup :title="`賣出商品`" :content="`需要介紹人來幫忙賣貨`" @cancel="popupState().setSellSales(false)" />
    </div>
    <div v-else-if="talkingCount < 1" class="zone__select">
      <TitleForPopup :name="`選擇賣出商品`" />
      <SelectForPopup :dataList="config().salesList" @ok="handleSalesOk" @cancel="handleSalesCancel" />
      <div v-if="isNotEnoughOrder == true">
        <DescriptionForPopup :title="`賣出${orderItem.name}失敗`" :content="`${orderItem.name}數量不得少於${minOrderCount}貫`"
          @cancel="notEnoughOrder" />
      </div>
    </div>
    <div v-if="talkingCount == 1">
      <TalkForPopup :peopleItem="config().introducerItem"
        :talking="talking().getIntroducerBuySalesTalking(orderItem.name)" />
      <ClickSpaceForPopup @close="closeIntroducerTalking" />
    </div>
    <div v-if="talkingCount > 1">
      <TalkForPopup :peopleItem="blackMarketeerItem" :talking="blackTalking" />
    </div>
    <div v-if="talkingCount == 2">
      <YesOrNoForPopup :title="`是否賣出${orderItem.name}`" @yes="handleYes" @no="handleNo" />
    </div>
    <div v-if="talkingCount == 3">
      <ClickSpaceForPopup @close="closeBlackMarketeerTalk" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.SellSales {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1200;

  .zone__select {
    width: 300px;
    height: 170px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
  }
}
</style>