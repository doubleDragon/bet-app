<template>
    <div class="sscContainer">
        <Title content="重庆时时彩" :onBack="handleBack"/>
        <div class="header ml20 mr20">
            <span class="c-58">距离59期截止:</span>
            <span class="c-db2a42 ml2">02:17</span>
        </div>

        <div class="c-313131 ml20 mr20 mt10">
            <span>每位至少选一号，按位猜对开奖号最高奖:</span>
            <span class="c-db2a42">215579元</span>
        </div>

        <div class="mt10 ml20 mr20">
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
                <ListItem title="个位" :numberList="numberList" :subNumberList="subNumberList"/>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .sscContainer {
        height: 100%;
        font-size: 14px;
        overflow-y: scroll;

        .header {
            padding: 10px 0;
            border-bottom: 2px solid #d7d7d7;
            text-align: center;
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
