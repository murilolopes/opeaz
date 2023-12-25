import Vue from "vue";
import Vuetify from "vuetify";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/main.css";

Vue.use(Vuetify);

const vuetify = new Vuetify();

new Vue({
  render: (h) => h(App),
  router,
  vuetify,
  store,
}).$mount("#app");
