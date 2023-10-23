<script setup>
import { ref } from 'vue';
import { config } from '@/stores';

const inputText = ref();
const emits = defineEmits();
const tipsError = ref(false)
const checkName = () => {
  // 使用正则表达式验证输入，只包含中文和英文，且长度不超过5个字符
  const regex = /^[a-zA-Z\u4e00-\u9fa5]{1,5}$/;
  if (regex.test(inputText.value)) {
    // 符合条件，触发事件
    emits('ok', inputText);
  } else {
    tipsError.value = true
    // 不符合条件，进行处理（比如提示用户输入不合法）
    // 这里你可以添加一些处理逻辑，比如显示错误信息或者禁用确定按钮
  }
}

</script>
<template>
  <div class="InputForPopup">
    <div class="zone__input">
      <input maxlength="5" type="text" v-model.trim="inputText">
      <div class="tips" :class="tipsError == true ? 'red' : 'blue'">只能輸入中文和英文，且長度不超過5個字符</div>
    </div>
    <div class="zone__decide">
      <div @click="checkName">決定</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.InputForPopup {
  width: 100%;
  padding-top: 7px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .zone__input {
    position: relative;

    input {
      width: 70%;
      height: 35px;
      font-size: 18px;
      padding-left: 5px;
      padding-right: 5px;
    }

    .tips {
      width: 160%;
      position: absolute;
      bottom: -20px;
      left: 0;
      font-size: 12px;

      &.blue {
        color: rgb(0, 4, 148);
      }

      &.red {
        color: red;
      }
    }
  }

}
</style>