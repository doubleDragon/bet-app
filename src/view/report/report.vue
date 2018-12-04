<template>
    <div class="reportContainer">
        <Title content="投注记录"/>

        <mt-navbar v-model="selected" class="tabContainer">
            <mt-tab-item id="1">全部订单</mt-tab-item>
            <mt-tab-item id="2">中奖订单</mt-tab-item>
            <mt-tab-item id="3">待开奖订单</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="pageContainer">
            <mt-tab-container-item id="1">
                <ListItem v-for="(item, index) in list1" :icon="item.imgUrl" :title="item.title"
                :content="item.content" :key="index" :index="index"
                :onClick="(i) => viewOrder(i)"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ListItem v-for="(item, index) in list2" :icon="item.imgUrl" :title="item.title"
                          :content="item.content" :key="index" :index="index"
                          :onClick="(i) => viewOrder(i)"/>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <ListItem v-for="(item, index) in list3" :icon="item.imgUrl" :title="item.title"
                          :content="item.content" :key="index" :index="index"
                          :onClick="(i) => viewOrder(i)"/>
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>
<script>
    import ListItem from './list_item.vue';
    import Title from '../../components/title.vue';
    import {LIST1, LIST2, LIST3} from "./constant";

    import {PAGE_REPORT} from "../container/constant";

    export default {
        components: {
            ListItem,
            Title
        },
        methods: {
            viewOrder(index) {
                this.$store.commit('saveTabIndex', {
                    mainIndex: PAGE_REPORT,
                    reportIndex: this.selected,
                });
                this.$router.push('order');
            }
        },
        data() {
            return {
                selected: this.$store.state.reportIndex,
                list1: LIST1,
                list2: LIST2,
                list3: LIST3,

            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>


<style lang="scss" scoped>
    .reportContainer {
        height: 100%;
        display: flex;
        flex-direction: column;

        .title {
            height: 60px;
            color: white;
            line-height: 60px;
            font-size: 27px;

            display: flex;
            justify-content: center;

            flex:0 0 auto;
        }

        .tabContainer {
            flex:0 0 auto;
            border-bottom: 1px solid #d5d5d5;
        }
        .pageContainer {
            flex:1 1 auto;
            overflow-y: scroll;
        }
    }
</style>
