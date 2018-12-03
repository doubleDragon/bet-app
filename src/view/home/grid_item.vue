<template>
    <div class="item" @click="handleClick">
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
</template>

<script>
    export default {
        props: {
            click: {
                type: Function,
                default: undefined
            },
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
        },

        methods: {
            handleClick() {
                if(this.click) {
                    this.click(this.title);
                }
            }
        },

        data() {
            return {
                key: ""
            }
        },
    }
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        flex-direction: row;
        width: 50%;
        padding-bottom: 8px;

        .img {
            width: 54px;
            height: 54px;
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            padding: 6px 0;

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
</style>
