import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Plugin } from 'vue-fragment'
import ElementUI from "element-ui";
import "jquery/src/jquery.js";
import "bootstrap";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  Plugin,
  render: (h) => h(App),
}).$mount("#app");
