import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({

    state: {
        mainIndex: 1,
        reportIndex: "1",
        hasLogin: false
    },
    mutations: {
        setReportIndex(state, index) {
            state.reportIndex = index;
        },
        setMainIndex(state, index) {
            state.mainIndex = index;
        },

        saveTabIndex(state, payload) {
            state.mainIndex = payload.mainIndex;
            state.reportIndex = payload.reportIndex;
        },

        setLogin(state, isLogin) {
            state.hasLogin = isLogin;
        }
    }
})
