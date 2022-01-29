import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import baseLayout from "./views/layout/baseLayout.vue";
import noLayout from "./views/layout/noLayout.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "./server";
import vuetify from "./plugins/vuetify";
import "./styles/test.css";

Vue.config.productionTip = false;
Vue.component("base-layout", baseLayout);
Vue.component("no-layout", noLayout);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
