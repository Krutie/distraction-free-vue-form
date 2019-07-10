import formConfig from "../../config/formConfig.json"

const mutations = {
  updateField(state, payload) {
    state.formData[payload.key] = payload.value
  }
}

const state = {
  formData: {}
}

formConfig.forEach(field => {
  state.formData[field.name] = ""
})

export default {
  namespaced: true,
  mutations,
  state
}
