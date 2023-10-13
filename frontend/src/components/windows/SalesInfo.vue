<!-- 銷貨視窗 -->
<script setup>
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import { config } from '@/stores';
</script>
<template>
  <div class="SalesInfo">
    <TitleForPopup :name="`銷貨`" :showCloseBtn="false" />
    <div class="zone__info">
      <div>
        <span>昨日銷貨</span>
        <span>{{ config().yesterdaySales }}両</span>
      </div>
      <div>
        <span>總庫存量</span>
        <span>{{ config().totalInventory }}貫</span>
      </div>
      <div>
        <span>本月</span>
        <span>{{ config().salesThisMonth }}両</span>
      </div>
      <div>
        <span>倉庫總容量</span>
        <span>{{ config().totalWarehouse }}貫</span>
      </div>
      <div>
        <span>上月</span>
        <span>{{ config().salesLastMonth }}両</span>
      </div>
      <div>
        <span>借款</span>
        <span>{{ config().loanAmount }}両</span>
      </div>
      <div>
        <span>今年</span>
        <span>{{ config().salesThisYear }}両</span>
      </div>
      <div>
        <span>私房錢</span>
        <span>{{ config().privateMoney }}両</span>
      </div>
      <div>
        <span>去年</span>
        <span>{{ config().lastYearSales }}両</span>
      </div>
      <div>
        <span>金主</span>
        <span>{{ config().totalAssets }}両</span>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.SalesInfo {
  width: 600px;
  position: absolute;
  top: 454px;
  left: 520px;
  background-color: #fff;

  & * {
    cursor: default;
  }

  .zone__info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;


    & div {
      width: 48%;
      background-color: #EBEAEB;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10px;
      padding-right: 5px;
    }
  }
}
</style>