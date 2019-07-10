<template>
  <div>
    <div v-for="(option, key) in options">
      <input
        type="checkbox"
        :value="option"
        :id="option"
        v-model="selectedValues"
        v-checked:[option]="selectedValues"
      />
      <label> {{ option }} </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      required: true
    },
    value: {
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      selectedValues: []
    }
  },
  watch: {
    selectedValues(newVal) {
      this.$emit("input", newVal)
    }
  },
  created() {
    if (this.value.length > 0) this.selectedValues = this.value
  },
  directives: {
    checked(el, binding) {
      return binding.value.includes(binding.arg)
        ? (el.checked = true)
        : (el.checked = false)
    }
  }
}
</script>
