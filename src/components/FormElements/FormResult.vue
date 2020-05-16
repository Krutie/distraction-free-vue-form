<template>
  <type-based-transition :transitionType="'fadeUpDown'">
    <div v-if="isComplete" id="complete" class="form-complete">
      <h1>Thank you!</h1>
      <p v-for="(item, key, index) in $store.state.lead.formData" :key="index">
        <span v-colorswatch:color="index"> {{ key }}: </span> {{ item }}
      </p>
    </div>
  </type-based-transition>
</template>
<script>
import TypeBasedTransition from "../Transitions/TypeBasedTransition.vue"

export default {
  name: "form-result",
  inject: ["formState"],
  components: {
    TypeBasedTransition
  },
  computed: {
    isComplete() {
      return this.formState.isComplete
    }
  }
}
</script>
