import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { isEmpty, isNull} from "lodash";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
//Vue.use(isEmpty, isNull, every, find);

Vue.prototype.$isEmpty = isEmpty
Vue.prototype.$isNull = isNull
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
