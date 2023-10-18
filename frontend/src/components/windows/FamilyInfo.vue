<!-- 家族資訊 -->
<script setup>
import { formattedDate } from '@/unit/formattedDate.js';
import { config } from '@/stores';
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
</script>
<template>
  <div class="MainInfo">
    <TitleForPopup :name="`家族資訊`" :showCloseBtn="false" />
    <div class="zone__card">
      <div class="time">{{ formattedDate }}</div>
      <div class="name">{{ config().name }}</div>
      <div class="warp__card">
        <div class="box__img"><img src="/images/familyCrest/familyCrest.jpg" alt=""></div>
        <div class="box__info">
          <div>{{ config().profession }}</div>
          <div>
            <span>
              年齡
            </span>
            <span>
              {{ config().age }}歲
            </span>
          </div>
          <div>
            <span>
              創業
            </span>
            <span>
              {{ config().afterYears }}年
            </span>
          </div>
        </div>
      </div>
      <div class="wrap__family">
        <div>
          <span>家族</span>
          <span>{{ config().familySize }}人</span>
        </div>
        <div>
          <span>大掌櫃</span>
          <span>{{ config().bigShopkeeperSize }}人</span>
        </div>
        <div>
          <span>掌櫃</span>
          <span>{{ config().shopkeeperSize }}人</span>
        </div>
        <div>
          <span>雜工</span>
          <span>{{ config().laborerSize }}人</span>
        </div>
        <div>
          <span>保鑣</span>
          <span>{{ config().bodyguardSize }}人</span>
        </div>
        <div>
          <span>船長</span>
          <span>{{ config().shipManSize }}人</span>
        </div>
        <div>
          <span>倉庫數</span>
          <span>{{ config().warehouseSize }}幢</span>
        </div>
        <div>
          <span>船隻數</span>
          <span>{{ config().shipSize }}艘</span>
        </div>
        <div>
          <span>停靠港</span>
          <span>{{ config().portSize }}座</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.MainInfo {
  width: 200px;
  position: absolute;
  top: 0;
  left: 620px;
  background-color: #fff;

  & * {
    cursor: default;
  }

  .zone__card {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    .time {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FFE213;
      font-weight: bold;
    }

    .name {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #5623B7;
      color: #fff;
    }

    .warp__card {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .box__img {
        width: 50px;
        height: 50px;
      }

      .box__info {
        width: 70%;
        color: #fff;
        margin-top: 10px;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        & div:nth-child(1) {
          background-color: #5623B7;
        }

        & div:nth-child(2) {
          background-color: #3B7307;
        }

        & div:nth-child(3) {
          background-color: #3B7307;
        }
      }
    }

    .wrap__family {
      width: 86%;
      margin-top: 10px;
      background-color: #EBEAEB;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 2px;
      padding-bottom: 2px;

      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>