import Vue from "vue";
import App from "./App.vue";
import vueRouter from "vue-router";
import { routes } from "./routes.js";
import store from "./store";

Vue.use(vueRouter);

const router = new vueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
