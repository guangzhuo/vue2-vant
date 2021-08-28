import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vantComponents from "./useVant";
import "amfe-flexible/index.js";

Vue.config.productionTip = false;

vantComponents.forEach((e) => {
  Vue.use(e);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
