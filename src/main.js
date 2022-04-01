import Vue from "vue";
import App from "./App.vue";
// appel routing 1
import router from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../public/assets/css/style.css";
import "../public/assets/fonts/style.css";
import "../public/assets/css/styles.min.css"

Vue.config.productionTip = false;

new Vue({
  // appel routing 2
  router,
  render: h => h(App)
}).$mount("#app");