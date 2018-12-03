// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store/index'

import './common/font/iconfont.css';

import 'lib-flexible';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './common/css/mint-cover.scss';

Vue.config.productionTip = false;

Vue.use(Mint);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
