<template>
    <mt-tabbar v-model="selected" fixed class="bg-primary">
        <mt-tab-item id="1" @click.native="() =>changeTab(0)">
            <img slot="icon" src="../assets/ic_home.png" alt="">
            大厅
        </mt-tab-item>
        <mt-tab-item id="2" @click.native="() => changeTab(1)">
            <img slot="icon" src="../assets/ic_report.png" alt="">
            投注记录
        </mt-tab-item>
        <mt-tab-item id="3" @click.native="() => changeTab(2)">
            <img slot="icon" src="../assets/ic_self.png" alt="">
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
    export default {
        props: {
            onTab: {
                type: Function,
                default: null
            },
            idList: {
                type: Array,
                default: []
            },
        },
        methods: {
            changeTab(i) {
                if(this.onTab != null) {
                    this.onTab(this.idList[i]);
                }
            },
        },

        computed: {
        },

        data() {
            return {
                selected: '' + this.$store.state.mainIndex
            }
        },

        created() {
        },
    }
</script>

<style lang="scss" scoped>
    .tab {
    }
</style>
