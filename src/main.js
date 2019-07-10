import Vue from "vue"
import App from "./App.vue"

import store from "./store"
import VeeValidate from "vee-validate"

import "./directives"
Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount("#app")
