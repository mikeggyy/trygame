<!-- 庫存視窗 -->
<script setup>
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import { config } from '@/stores';
</script>
<template>
  <div class="Stock">
    <TitleForPopup :name="`庫存`" :showCloseBtn="false" />
    <div class="zone__info">
      <div class="wrap__info" v-for="(item, index) in Array.from({ length: 20 })">
        <div v-if="config().salesList[index]">
          <span class="order">{{ config().salesList[index].name }}</span>
          <span class="order">{{ config().salesList[index].value }}貫</span>
        </div>
        <div v-else>
          <span class="order"></span>
          <span class="order"></span> <!-- 或者任何你想要顯示的內容 -->
        </div>
      </div>
    </div>
    <div class="zone__total">
      <span>合計</span>
      <span>{{ config().totalInventory }}貫</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Stock {
  width: 500px;
  position: absolute;
  top: 280px;
  left: 0;
  background-color: #fff;

  & * {
    cursor: default;
  }

  .zone__info {
    padding: 10px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 280px;
    align-items: center;

    .wrap__info {
      width: 48%;

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1px;

        .order {
          width: 49.5%;
          background-color: #DFE4F2;
          height: 24px;

          &:nth-child(1) {
            padding-left: 2px;
          }

          &:nth-child(2) {
            display: flex;
            justify-content: flex-end;
            padding-right: 2px;
          }
        }
      }
    }

  }

  .zone__total {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    width: 98%;
    margin: auto;

    span {
      width: 50%;
      background-color: #CAC9CA;

      &:nth-child(1) {
        padding-left: 2px;
      }

      &:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        padding-right: 2px;
      }
    }
  }
}
</style>