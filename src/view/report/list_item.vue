<template>
    <div class="item" @click="handleClick">
        <div class="left">
            <img :src="icon" alt="" class="img">
            <div class="right">
                <div class="topText">
                    {{title}}
                </div>
                <div class="bottomText">
                    {{content}}
                </div>
            </div>
        </div>

        <i class="iconfont icon-right"></i>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },

            content: {
                type: String,
                default: ""
            },

            index: {
                type: Number,
            },

            onClick: {
                type: Function,
                default: null
            }
        },
        data() {
            return {
                key: 0
            }
        },
        methods: {
            handleClick() {
                if(this.onClick) {
                    this.onClick(this.index);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

    .item {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 8px;
        border-bottom: 1px solid #d5d5d5;
        justify-content: space-between;
        align-items: center;

        .left {
            display: flex;
            flex-direction: row;
            .img {
                width: 45px;
                height: 45px;
            }

            .right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 10px;
                padding: 8px 0 0 0;

                .topText {
                    font-size: 18px;
                    font-weight: bold;
                    height: 20px;
                    line-height: 20px;
                    color: #111111;
                }
                .bottomText {
                    font-size: 14px;
                    color: #555555;
                }
            }
        }
    }
</style>
