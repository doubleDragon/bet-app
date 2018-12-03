<template>
    <div class="quickContainer">

        <Title content="江苏快3" :onBack="handleBack"/>

        <div class="footerContainer bg-primary">
            <div>选中号码: 2553546</div>
            <div>共4注3442元</div>

            <mt-button type="default" class="confirm">确定</mt-button>

        </div>

        <div class="headerContainer ml20 mr20">
            <span class="c-58">距离59期截止:</span>
            <span class="c-db2a42 ml2">02:17</span>
        </div>

        <div class="gridContainer ml20 mr20 mt10">
            <div class="itemWrap" v-for="item in grid_list">
                <div>{{item.top}}</div>
                <div>奖金{{item.value}}元</div>
            </div>
        </div>

        <div class="gridContainer ml20 mr20 mt10">
            <div class="selectWrap">
                大
            </div>
            <div class="selectWrap">
                小
            </div>
            <div class="selectWrap">
                单
            </div>
            <div class="selectWrap" :class="'select'">
                双
            </div>
        </div>

        <div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
    .quickContainer {
        height: 100%;


        .headerContainer {
            padding: 10px 0;
            border-bottom: 2px solid #d7d7d7;
            text-align: center;
        }

        .gridContainer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;

            .itemWrap {
                background-color: #63b079;
                padding: 4px 10px;
                text-align: center;
                color: white;
                font-size: 14px;
                margin-bottom: 10px;
            }
            .selectWrap {
                padding: 4px 30px;
                background-color: #8c8c8c;
                color: white;


                &.select {
                    background-color: #d9771d;
                }
            }
        }

        .footerContainer {
            width: 100%;
            height: 42px;
            position: fixed;
            bottom: 0;

            color: white;
            text-align: center;
            font-size: 12px;
            padding-top: 4px;

            .confirm {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 10px;

                height: 34px;
                margin-top: 4px;
                margin-bottom: 4px;
            }
        }
    }
</style>

<script>
    import Title from '../../components/title';
    import {GRID_DATA} from "./constant";

    export default {
        components: {
            Title
        },
        methods: {
            handleBack() {
                this.$router.go(-1);
            }
        },
        data() {
            return {
                grid_list: GRID_DATA
            }
        },
    }
</script>
