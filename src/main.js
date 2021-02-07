import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'lib-flexible';
import { Toast,Dialog } from "vant";
import moment from "moment";


Vue.prototype.$moment = moment; //挂载到vue原型链上
Vue.prototype.$Toast = Toast;
Vue.prototype.$Dialog = Dialog;


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


