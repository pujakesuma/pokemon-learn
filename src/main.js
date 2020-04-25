import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router/routes";
import store from "./store/store";

Vue.config.productionTip = true;

Vue.use(VueRouter);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
