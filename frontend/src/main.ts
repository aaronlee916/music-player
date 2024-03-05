import Vue from "vue";
import uView from "uview-ui";

import App from "./App.vue";
import "./uni.promisify.adaptor";

Vue.use(uView);
Vue.config.productionTip = false;

const app = new (
  typeof App === "function"
    ? App
    : Vue.extend(Object.assign({ mpType: "app" }, App))
)();
app.$mount();
