<template>
    <div class="orderContainer">
        <Title content="订单详情" :onBack="handleBack"/>
        <div class="header">
            <div class="top">
                <div class="imgBox">
                    <img src="../../assets/ic_jsk3.png" alt="" class="img">
                </div>

                <span>期数: </span>
                <span class="count ml2">230</span>
                <span class="ml2">期</span>
            </div>

            <div class="bottom mt2">
                <div class="leftBox">
                    <span>江苏快3</span>
                </div>

                <span>开奖时间: 20181020</span>
            </div>
        </div>

        <div class="currentContainer">
            <div class="label">
                本期号码:
            </div>

            <div class="gridBox mt14">
                <div v-for="num in currentList" class="wrap">
                    <div class="inside">
                        {{num}}
                    </div>
                </div>

            </div>
        </div>

        <div class="currentContainer ml10">
            <div class="label">
                投注号码:
            </div>

            <div class="gridBox mt14">
                <div v-for="num in currentList" class="wrap">
                    <div class="inside">
                        {{num}}
                    </div>
                </div>

            </div>
        </div>

        <div class="footer mt14">
            <div>
                <span>投注金额: </span>
                <span class="money">2</span>
                <span>元</span>
            </div>
            <div class="mt10">
                <span>获得奖金: </span>
                <span class="money">32</span>
                <span>元</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from '../../components/title.vue';

    export default {
        components: {
            Title
        },
        methods: {
            handleBack() {
                this.$router.go(-1);
            }
        },
        data() {
            return {
                currentList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
            }
        }
    }
</script>

<style lang="scss" scoped>
    .orderContainer {
        height: 100%;

        .header {
            margin: 0 18px;
            border-bottom: 2px solid #d5d5d5;
            padding: 16px 0;

            .top {
                display: flex;
                flex-direction: row;
                align-items: center;
                color: #585858;
                font-size: 16px;

                .imgBox {
                    width: 64px;

                    .img {
                        width: 50px;
                        height: 50px;
                    }
                }

                .count {
                    color: #ca02d1;
                }
            }

            .bottom {
                display: flex;
                flex-direction: row;
                align-items: center;
                color: #585858;
                font-size: 16px;

                .leftBox {
                    width: 64px;
                }
            }
        }

        .currentContainer {
            margin: 0 18px;
            padding: 8px 0;
            border-bottom: 2px solid #d5d5d5;

            .label {
                font-size: 14px;
                color: #585858;
            }

            .gridBox {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-content: space-between;
                height: 80px;

                .wrap {
                    width: 20%;
                    height: 34px;
                    display: flex;
                    justify-content: center;

                    .inside {
                        width: 34px;
                        height: 34px;
                        line-height: 34px;
                        border-radius: 50%;
                        background-color: #fe5f0b;
                        background-size: 34px;
                        text-align: center;
                        color: white;
                        border: 1px solid #9d4b21;
                    }
                }
            }
        }


        .footer {
            margin: 0 18px;
            padding: 10px 0;

            font-size: 14px;
            color: #585858;

            .money {
                color: #ca02d1;
            }
        }
    }
</style>
