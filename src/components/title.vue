<template>
    <div class="titleContainer bg-primary">

        <div v-show="onBack" @click="handleClickBack" class="backContainer">
            <i class="iconfont icon-left icon"></i><span>返回</span>
        </div>

        <div class="titleContent">
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            onBack: {
                type: Function,
                default: null
            },
            content: {
                type: String,
                default: ""
            }
        },
        methods: {
            handleClickBack() {
                if(this.onBack) {
                    this.onBack();
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .titleContainer {
        flex: 0 0 auto;

        display: flex;
        flex-direction: row;
        position: relative;

        height: 60px;
        color: white;
        line-height: 60px;

        justify-content: center;

        .titleContent {
            font-size: 27px;
        }

        .backContainer {
            display: flex;
            /*justify-content: center;*/
            position: absolute;
            left: 10px;
            font-size: 16px;
            height: 100%;
            line-height: 60px;

            .icon {
                font-size: 26px;
            }
        }
    }
</style>
