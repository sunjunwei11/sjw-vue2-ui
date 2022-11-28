import Vue from "vue";
import App from "./App.vue";

// import "../components/css/demo.scss";
// import "../components/css/card.scss";
// import DemoMain from "../components/lib/demo";
// import CardMain from "../components/lib/card";

// Vue.use(DemoMain);
// Vue.use(CardMain);

import "sjw-vue2-ui/dist/css/index.css";
import SjwUi from "sjw-vue2-ui";
Vue.use(SjwUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
