<template>
    <div class="container">
        <Title content="我的"/>

        <div v-if="notLogin" class="loginContainer">
            <div class="text">
                您还未登录
            </div>
            <mt-button type="default" class="mt10" @click.native="handleLogin">登录</mt-button>
        </div>

        <div v-else>
            <div class="header">
                <div>
                    <span>账号: </span>
                    <span class="ml10">test123</span>
                </div>
                <div>
                    <span>账号余额:</span>
                    <span class="money ml10">5000</span>
                    <span>元</span>
                </div>
            </div>

            <div class="operation">
                <div class="item">
                    <div>
                        <i class="iconfont icon-deposit img"></i>
                    </div>
                    <div class="label">
                        充值
                    </div>
                </div>

                <div class="item">
                    <div>
                        <i class="iconfont icon-withdraw img"></i>
                    </div>
                    <div class="label">
                        体现
                    </div>
                </div>
            </div>

            <div v-for="(item, index) in settingList" :key="index" class="setting">
                <div class="left">
                    <i class="iconfont logo" :class="item.icon"></i>
                    <span class="">{{item.text}}</span>
                </div>


                <i class="iconfont icon-right"></i>
            </div>
        </div>


    </div>
</template>

<script>
    import Title from '../../components/title.vue';
    import {PAGE_SELF} from "../container/constant";

    export default {
        components: {
            Title,
        },
        methods: {
            handleLogin() {
                this.$store.commit('setMainIndex', PAGE_SELF);
                this.$router.push("login");
            }
        },
        data() {
            return {
                notLogin: !this.$store.state.hasLogin,
                settingList: [
                    {
                        icon: 'icon-user',
                        text: "个人信息",
                    },
                    {
                        icon: 'icon-key',
                        text: "修改密码",
                    },
                    {
                        icon: 'icon-question',
                        text: "帮助中心",
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        height: 100%;

        .loginContainer {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .text {
                font-size: 20px;
            }
        }

        .header {
            margin: 20px 18px 0 18px;
            padding-bottom: 14px;
            font-size: 16px;
            border-bottom: 2px solid #d5d5d5;
            color: #585858;
            font-weight: bold;

            .money {
                color: #0294d1;
            }
        }

        .operation {
            margin: 0 18px;
            display: flex;
            flex-direction: row;

            .item {
                width: 50%;
                padding: 8px 0;
                text-align: center;
                font-size: 16px;
                color: #585858;

                .label {
                    font-weight: bold;
                }

                .img {
                    font-size: 45px;
                    color: #9c9c9c;
                }
            }
        }

        .setting {
            border: 2px solid #dbdbdb;
            margin: 10px 18px;
            padding: 8px 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            color: #9c9c9c;
            border-radius: 6px;
            font-size: 16px;

            .left {
                .logo {
                    font-size: 18px;
                }
            }

            .img {
                width: 30px;
                height: 30px;
            }
        }
    }
</style>
