<script setup>
// import TalkForPopup from '@/components/popup/TalkForPopup.vue';
const { peopleItem, content } = defineProps({
  peopleItem: {
    type: Object, // 定义 prop 的类型
    default: {} // 默认值，如果父组件没有传递该 prop
  },
  talking: {
    type: String,
    default: ''
  },
});
</script>
<template>
  <div class="TalkForPopup">
    <div class="zone__talk">
      <div class="wrap__talk">
        {{ talking }}
      </div>
      <div class="wrap__bottom">
        <div class="box__img"><img :src="`/images/people/${peopleItem.headImg}`" alt=""></div>
        <div class="box__info">
          <div class="name">{{ peopleItem.name }}</div>
          <div class="info">
            <div class="age">{{ peopleItem.age }}歲</div>
            <div class="profession">{{ peopleItem.profession }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.TalkForPopup {
  position: absolute;
  top: 90px;
  left: 50px;
  z-index: 300;
  *{
    cursor: default;
  }
  .zone__talk {
    width: 400px;
    height: 200px;
    background-color: #8C8B8C;
    padding: 10px;
    border: 1px black solid;
    display: flex;
    flex-wrap: wrap;

    .wrap__talk {
      width: 100%;
      height: 50%;
      background-color: #fff;
      border: 1px black solid;
      box-shadow: 2px 2px 2px #000;
      border-radius: 8px;
      padding: 10px;
    }

    .wrap__bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      .box__img {
        width: 20%;
        display: flex;
        align-items: flex-end;
      }

      .box__info {
        width: 78%;

        .name {
          width: 100%;
          color: #fff;
          background-color: #396A07;
          text-align: center;
        }

        .info {
          display: flex;
          justify-content: space-between;
          background-color: #fff;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
    }
  }
}
</style>