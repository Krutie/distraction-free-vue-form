<template>
  <div class="form-error-message">
    <type-based-transition transition-type="fadeUpDown">
      <button class="form-button" v-if="formState.isValid" v-colorswatch:bg="formState.activeField">Ok</button>
      <span v-else> <slot /> </span>
    </type-based-transition>
  </div>
</template>
<script>
import TypeBasedTransition from "../Transitions/TypeBasedTransition.vue"

export default {
  name: "field-error",
  inject: ["formState"],
  components: {
    TypeBasedTransition
  }
}
</script>
