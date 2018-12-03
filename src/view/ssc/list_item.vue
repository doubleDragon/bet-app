<template>
    <div class="container">
        <div class="rowContainer">
            <div class="label">{{title}}</div>
            <ul class="ml20 numberContainer">
                <li v-for="item in numberList" class="wrap">
                    <div class="inside" :class="item.selected ? 'selected' : ''">
                        {{item.no}}
                    </div>
                </li>
            </ul>
        </div>

        <div class="rowContainer">
            <div class="label">遗漏</div>
            <ul class="ml20 numberDesContainer">
                <li v-for="noDes in subNumberList" class="wrap">
                    {{noDes}}
                </li>
            </ul>
        </div>

        <div class="rowContainer">
            <ul class="numberContainer ml54">
                <li v-for="item in numberList" class="wrap">
                    <div class="inside">
                        {{item.no}}
                    </div>
                </li>
            </ul>
        </div>
        <div class="rowContainer">
            <ul class="numberDesContainer ml54">
                <li v-for="noDes in subNumberList" class="wrap">
                    {{noDes}}
                </li>
            </ul>
        </div>


        <div class="mt10 ml54 divider">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        .divider {
            border-bottom: 2px solid #cecece;
        }
        .rowContainer {
            display: flex;
            flex-direction: row;
            align-items: center;

            .label {
                width: 34px;
                height: 20px;
                background-color: #cecece;
                color: white;
                position: relative;
                text-align: center;
                border-bottom-left-radius: 4px;
                border-top-left-radius: 4px;

                &:before {
                    position: absolute;
                    content: "";
                    width: 0;
                    height: 0;
                    left: 34px;
                    top: 0;
                    border-left: 10px solid #cecece;
                    border-top: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                }
            }

            .numberContainer {
                flex: 1;
                display: flex;
                flex-direction: row;

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
                        background-color: white;
                        background-size: 34px;
                        text-align: center;
                        color: #eb5d1e;
                        border: 1px solid #b1b1b1;

                        &.selected {
                            color: white;
                            background-color: #fe5f0b;
                        }
                    }


                }
            }

            .numberDesContainer {
                flex: 1;
                display: flex;
                flex-direction: row;

                .wrap {
                    width: 20%;
                    height: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #a4a4a4;
                }
            }
        }
    }
</style>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            numberList: {
                type: Array,
                default: []
            },
            subNumberList: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
            }
        },
    }
</script>
