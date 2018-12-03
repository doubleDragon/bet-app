<template>
    <div class="loginContainer">
        <Title content="登录" :onBack="handleBack"/>


        <div class="mt100">
            <mt-field label="" placeholder="请输入用户名" type="email" v-model="form.username"></mt-field>
            <mt-field label="" placeholder="请输入密码" type="password" v-model="form.pwd"></mt-field>
        </div>

        <div class="mt50 ml20 mr20">
            <mt-button type="default" size="large" @click.native="handleLogin">登录</mt-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .loginContainer {
    }
</style>

<script>
    import Title from '../../components/title.vue';
    import {Toast} from 'mint-ui';
    export default {
        name: 'login',
        components: {
            Title
        },
        methods: {
            handleBack() {
                this.$router.go(-1);
            },
            handleLogin() {
                if(!this.form.username) {
                    Toast('用户名不能为空');
                    return;
                }
                if(!this.form.username) {
                    Toast('密码不能为空');
                    return;
                }
                this.$store.commit("setLogin",  true);
                this.handleBack();
            }
        },
        data() {
            return {
                form: {
                    username: '',
                    pwd: '',
                }
            }
        },
    }
</script>

