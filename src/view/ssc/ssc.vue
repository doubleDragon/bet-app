<template>
    <div class="sscContainer">
        <!--重庆时时彩-->
        <Title content="xx" :onBack="handleBack" :fixed="true"/>

        <div class="footerContainer bg-primary">
            <div>选中号码: 2553546</div>
            <div>共4注3442元</div>

            <mt-button type="default" class="confirm">确定</mt-button>

        </div>

        <div class="contentContainer">
            <div class="headerContainer ml20 mr20">
                <span class="c-58">距离59期截止:</span>
                <span class="c-db2a42 ml2">02:17</span>
            </div>

            <div class="c-313131 ml20 mr20 mt10">
                <span>每位至少选一号，按位猜对开奖号最高奖:</span>
                <span class="c-db2a42">215579元</span>
            </div>

            <div class="mt10 ml20 mr20 selectContainer">
                <div class="mt10">
                    <ListItem title="万位" :numberList="numberList" :subNumberList="subNumberList"/>
                </div>
                <div class="mt10">
                    <ListItem title="千位" :numberList="numberList" :subNumberList="subNumberList"/>
                </div>

                <div class="mt10">
                    <ListItem title="百位" :numberList="numberList" :subNumberList="subNumberList"/>
                </div>

                <div class="mt10">
                    <ListItem title="个位" :numberList="numberList" :subNumberList="subNumberList" :showDivider="false"/>
                </div>
            </div>

            <div class="mt14 gridContainer ml20 mr20">
                <div class="item">
                    五星通选
                </div>
                <div class="item">
                    五星直选
                </div>
                <div class="item">
                    三星直选
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .sscContainer {
        height: 100%;
        font-size: 14px;

        .contentContainer {
            overflow-y: scroll;
            height: 100%;
            padding-top: 60px;
            padding-bottom: 42px;

            .headerContainer {
                padding: 10px 0;
                border-bottom: 2px solid #d7d7d7;
                text-align: center;
            }

            .selectContainer {
                border-bottom: 2px solid #cecece;
                padding-bottom: 10px;
            }

            .gridContainer {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                align-content: space-between;
                padding-bottom: 10px;

                .item {
                    padding: 4px 10px;
                    width: auto;
                    background-color: #d5d5d5;
                    color: #646464;
                    border-radius: 4px;
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
    import {NO_LIST, NO_DES_LIST} from "./constants";
    import Title from '../../components/title.vue';
    import ListItem from './list_item.vue';

    export default {
        name: 'ssc',
        components: {
            Title,
            ListItem
        },
        methods: {
            handleBack() {
                this.$router.go(-1);
            }
        },
        data() {
            return {
                numberList: NO_LIST,
                subNumberList: NO_DES_LIST
            }
        },
    }
</script>
