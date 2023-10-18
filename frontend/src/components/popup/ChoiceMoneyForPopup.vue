<script setup>
// import ChoiceMoney from '@/components/popup/ChoiceMoney.vue'
import TitleForPopup from '@/components/popup/TitleForPopup.vue';
import DescriptionForPopup from '@/components/popup/DescriptionForPopup.vue'
import { popupState, config } from '@/stores'
import { ref } from 'vue';
const emits = defineEmits();
const { isPrivateMoney, MaxlimitMoney, MinlimitMoney } = defineProps({
    MaxlimitMoney: {
        type: Number, // 定义 prop 的类型
        default: 50 // 默认值，如果父组件没有传递该 prop
    },
    MinlimitMoney: {
        type: Number, // 定义 prop 的类型
        default: 1 // 默认值，如果父组件没有传递该 prop
    },
    isPrivateMoney: {
        type: Boolean, // 定义 prop 的类型
        default: false // 默认值，如果父组件没有传递该 prop
    }
});
const money = ref(1)
const selectMoney = ref(1)
const isAddPressed = ref(false)
const isLessPressed = ref(false)
const isMaxPressed = ref(false)
const isMinPressed = ref(false)
const isDecidePressed = ref(false)
const isShowDescription = ref(false)
const isMoneyEnough = ref(null)
isMoneyEnough.value = isPrivateMoney == false ? config().totalAssets : config().privateMoney
if (MinlimitMoney > money.value) {
    money.value = MinlimitMoney
}
const addMouseDown = () => {
    isAddPressed.value = true;
}
const addMouseUp = () => {
    isAddPressed.value = false;
    if (money.value + selectMoney.value >= MaxlimitMoney) {
        money.value = MaxlimitMoney
    } else {
        money.value = money.value + selectMoney.value
    }
}
const lessMouseDown = () => {
    isLessPressed.value = true;
}
const lessMouseUp = () => {
    isLessPressed.value = false;
    if (money.value - selectMoney.value <= MinlimitMoney) {
        money.value = MinlimitMoney
    } else {
        money.value = money.value - selectMoney.value;
    }
}
const maxMouseDown = () => {
    isMaxPressed.value = true;
}
const maxMouseUp = () => {
    isMaxPressed.value = false;
    money.value = MaxlimitMoney
}
const minMouseDown = () => {
    isMinPressed.value = true;
}
const minMouseUp = () => {
    isMinPressed.value = false;
    money.value = MinlimitMoney
}
const decideMouseDown = () => {
    isDecidePressed.value = true;
}
const decideMouseUp = () => {
    isDecidePressed.value = false;
    if (isMoneyEnough.value - money.value >= 0) {
        isDecidePressed.value = false;
        emits('decideMoney', money.value)
    } else {
        isShowDescription.value = true
    }
}
const handleCancel = () => {
    isShowDescription.value = false
}
</script>
<template>
    <div class="ChoiceMoney">
        <div class="main__content">
            <TitleForPopup name="選擇金額" @close="popupState().setChoiceMoney(false)" />
            <div class="zone__content">
                <div class="wrap__money">
                    <div class="money">{{ money }}兩</div>
                </div>
                <div class="wrap__select">
                    <div class="box__select">
                        <label for="money1">
                            <span class="custom-radio">
                                <input type="radio" id="money1" name="money" :value="1" v-model="selectMoney" checked />
                                <span class="check"></span>
                            </span>
                            <span class="money_text">1兩</span>
                        </label>
                        <label for="money2">
                            <span class="custom-radio">
                                <input type="radio" id="money2" name="money" v-model="selectMoney" :value="10" />
                                <span class="check"></span>
                            </span>
                            <span class="money_text">10兩</span>
                        </label>
                        <label for="money3">
                            <span class="custom-radio">
                                <input type="radio" id="money3" name="money" v-model="selectMoney" :value="100" />
                                <span class="check"></span>
                            </span>
                            <span class="money_text">100兩</span>
                        </label>
                        <label for="money4">
                            <span class="custom-radio">
                                <input type="radio" id="money4" name="money" v-model="selectMoney" :value="1000" />
                                <span class="check"></span>
                            </span>
                            <span class="money_text">1000兩</span>
                        </label>
                        <label for="money5">
                            <span class="custom-radio">
                                <input type="radio" id="money5" name="money" v-model="selectMoney" :value="10000" />
                                <span class="check"></span>
                            </span>
                            <span class="money_text">10000兩</span>
                        </label>
                        <span class="unit">
                            單位
                        </span>
                    </div>
                    <div class="box__choice">
                        <div class="choiceBtn">
                            <div class="addOrLess">
                                <div class="add" :class="{ press: isAddPressed }" @mousedown="addMouseDown"
                                    @mouseup="addMouseUp">
                                    <div class="triangle-up"></div>
                                </div>
                                <div class="less" :class="{ press: isLessPressed }" @mousedown="lessMouseDown"
                                    @mouseup="lessMouseUp">
                                    <div class="triangle-down"></div>
                                </div>
                            </div>
                            <div class="maxOrmin">
                                <div class="max" :class="{ press: isMaxPressed }" @mousedown="maxMouseDown"
                                    @mouseup="maxMouseUp">上限</div>
                                <div class="min" :class="{ press: isMinPressed }" @mousedown="minMouseDown"
                                    @mouseup="minMouseUp">下限</div>
                            </div>
                        </div>
                        <div class="decideBtn">
                            <div class="decide" :class="{ press: isDecidePressed }" @mousedown="decideMouseDown"
                                @mouseup="decideMouseUp">決定</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isShowDescription == true">
            <DescriptionForPopup :title="`設定金額失敗`" :content="`可用${isPrivateMoney == false ? '金主' : '私房錢'}不足`"
                @cancel="handleCancel" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* 隱藏原始的 radio 按鈕 */
input[type=radio] {
    visibility: hidden;
}

/* 創建選中的 radio 樣式 */
input[type=radio]:checked+.check {
    display: inline-block;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background-color: black;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}

.ChoiceMoney {
    width: 100%;
    height: 100vh;
    z-index: 900;
    position: fixed;
    left: 0;
    top: 0;

    .main__content {
        width: 320px;
        height: 220px;
        position: absolute;
        left: 300px;
        top: 200px;
        background-color: #fff;
        padding: 2px;

        * {
            cursor: default;
        }

        .wrap__money {
            padding: 5px;

            .money {
                width: 100%;
                box-shadow: inset 1px 1px 2px 0px rgba(0, 0, 0, 1);
                background-color: #fff;
                display: flex;
                justify-content: flex-end;
                padding-right: 5px;
                color: gray;
            }
        }

        .wrap__select {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 5px;

            .box__select {
                width: 36%;
                border: 1px solid #0f0e0e;
                padding: 10px;
                position: relative;

                label {
                    display: flex;
                    align-items: center;

                    /* 創建自定義的 radio 樣式 */
                    .custom-radio {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background-color: #fff;
                        border-radius: 50%;
                        position: relative;
                        box-shadow: inset 1px 1px 2px 0px rgba(0, 0, 0, 1);
                        cursor: pointer;
                    }

                    .money_text {
                        margin-left: 5px;
                    }
                }

                .unit {
                    position: absolute;
                    top: -10px;
                    left: 10px;
                    background-color: #fff;
                    padding-left: 3px;
                    padding-right: 3px;
                }
            }

            .box__choice {
                width: 70%;
                display: flex;
                flex-wrap: wrap;
                padding-left: 10px;

                .choiceBtn {
                    width: 100%;
                    display: flex;

                    .addOrLess {
                        width: 50%;

                        .add,
                        .less {
                            width: 80px;
                            height: 22px;
                            margin-bottom: 10px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #C2C1C2;
                            box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, .6), inset 2px 1px 2px 1px rgba(255, 255, 255, 1);
                            cursor: pointer;

                            &.press {
                                box-shadow: inset 2px 1px 2px 0px rgba(0, 0, 0, 1);
                                padding-top: 3px;
                            }
                        }

                        .add {
                            .triangle-up {
                                width: 0;
                                height: 0;
                                border-left: 10px solid transparent;
                                border-right: 10px solid transparent;
                                border-bottom: 10px solid black;
                                cursor: pointer;
                            }
                        }

                        .less {
                            .triangle-down {
                                width: 0;
                                height: 0;
                                border-left: 10px solid transparent;
                                border-right: 10px solid transparent;
                                border-top: 10px solid black;
                                cursor: pointer;
                            }
                        }
                    }

                    .maxOrmin {
                        width: 50%;

                        .max,
                        .min {
                            width: 88px;
                            height: 30px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-weight: bold;
                            background-color: #C2C1C2;
                            box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, .6), inset 2px 1px 2px 1px rgba(255, 255, 255, 1);
                            margin-bottom: 2px;
                            cursor: pointer;

                            &.press {
                                box-shadow: inset 2px 1px 2px 0px rgba(0, 0, 0, 1);
                                padding-top: 3px;
                            }
                        }
                    }
                }

                .decideBtn {
                    width: 100%;

                    .decide {
                        width: 184px;
                        height: 30px;
                        font-weight: bold;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #C2C1C2;
                        box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, .6), inset 2px 1px 2px 1px rgba(255, 255, 255, 1);
                        margin-top: 20px;
                        cursor: pointer;

                        &.press {
                            box-shadow: inset 2px 1px 2px 0px rgba(0, 0, 0, 1);
                            padding-top: 3px;
                        }
                    }
                }
            }
        }
    }
}
</style>