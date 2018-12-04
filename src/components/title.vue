<template>
    <div class="titleContainer bg-primary" :class="fixed ? 'fixTop' : ''">

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
            },
            fixed: {
                type: Boolean,
                default: false
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

        width: 100%;
        height: 60px;
        color: white;
        line-height: 60px;

        justify-content: center;

        z-index: 1000;

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

    .fixTop {
        position: fixed;
        top: 0;
    }
</style>
