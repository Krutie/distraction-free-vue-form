import Vue from "vue"
import Vuex from "vuex"

import EOI from "./form/eoi.js"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    EOI
  },
  strict: process.env.NODE_ENV !== `production`
})
