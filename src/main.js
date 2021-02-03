import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";


Vue.config.productionTip = false;

Vue.filter('uppercase',function (v){
  return v.toUpperCase();


});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
