import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import {routes} from './router/index.js'
import "bootstrap/dist/css/bootstrap.min.css"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {route} from './public/modules/profile/profile.js'
import axios from 'axios';
import fa from 'fontawesome-vue';

Vue.use(fa);

window.Vue = Vue;

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.use(VueResource);
Vue.http.options.root= 'https://vuejs-http-7f2d8.firebaseio.com/';
axios.defaults.baseURL = 'https://vuejs-http-7f2d8.firebaseio.com/';

const router = new VueRouter({
  routes,
  mode:'history'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
