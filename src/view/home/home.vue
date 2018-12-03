<template>
    <div class="container">
        <Title content="二龙彩票"/>


        <div class="swipe">
            <mt-swipe :auto="4000" class="bound">
                <mt-swipe-item>
                    <img :src="bannerList[0]" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img :src="bannerList[1]" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img :src="bannerList[2]" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="row mt10">
            <GridItem :icon="require('../../assets/ic_ssc.png')"
                      title="重庆时时彩"
                      content="全天120期"
                      :click="onClickItem"
            ></GridItem>
            <GridItem :icon="require('../../assets/ic_pl3.png')"
                      title="排列3"
                      content="全天197期"
                      :click="onClickItem"
            ></GridItem>
        </div>

        <div class="row mt10">
            <GridItem :icon="require('../../assets/ic_pk10.png')"
                      title="pk10"
                      content="2分钟一期"
                      :click="onClickItem"
            ></GridItem>
            <GridItem :icon="require('../../assets/ic_jsk3.png')"
                      title="江苏快3"
                      content="全天82期"
                      :click="onClickItem"
            ></GridItem>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .container {
        height: 100%;

        .swipe {
            height: 130px;
        }

        .row {
            display: flex;
            flex-direction: row;
            margin-left: 8px;
            margin-right: 8px;
            border-bottom: 2px solid #d5d5d5;
        }
    }

    .bound {
        background-color: yellow;
    }
</style>

<script>
    import {BANNER_LIST} from "./constant";
    import GridItem from './grid_item.vue';
    import Title from '../../components/title.vue';

    export default {
        name: 'home',
        components: {
            GridItem,
            Title
        },
        methods: {
            onClickItem(title) {
                console.log("click: " , title);
                this.$router.push("ssc");
            }
        },
        data() {
            return {
                bannerList: BANNER_LIST
            }
        },

    }
</script>
