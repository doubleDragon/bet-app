<template>
    <div class="mainContainer">
        <div class="content">
            <div v-show="showHome" class="box">
                <Home/>
            </div>
            <div v-show="showReport" class="box">
                <Report/>
            </div>

            <div v-show="showSelf" class="box">
                <Self/>
            </div>
        </div>

        <BottomTab :idList="idList" :onTab="onChangeTab"></BottomTab>
    </div>
</template>

<script>
    import BottomTab from '../../components/tabbar.vue';
    import Home from '../home';
    import Report from '../report';
    import Self from '../self';

    import {PAGE_HOME, PAGE_REPORT, PAGE_SELF} from "./constant.js";

    export default {
        name: 'container',
        components: {
            BottomTab,
            Home,
            Report,
            Self
        },
        methods: {
            onChangeTab(index) {
                this.index = index;
            },
        },
        computed: {
            showHome() {
                return this.index === PAGE_HOME;
            },
            showReport() {
                return this.index === PAGE_REPORT;
            },
            showSelf() {
                return this.index === PAGE_SELF;
            },
        },
        data() {
            return {
                idList: [PAGE_HOME, PAGE_REPORT, PAGE_SELF],
                index: this.$store.state.mainIndex,
            }
        },
        created() {
            console.log("container storeIndex: " + this.$store.state.mainIndex + "---index: " + this.index);
        }
    }
</script>

<style lang="scss" scoped>
    .mainContainer {
        height: 100%;
        .content {
            height: 100%;
            padding-bottom: 58px;

            .box {
                height: 100%;
            }
        }
    }
</style>
