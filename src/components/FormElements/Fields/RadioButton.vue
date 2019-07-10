<template>
  <div>
    <div v-for="option in options">
      <input
        type="radio"
        :value="option"
        @input="$emit('input', $event.target.value)"
        :checked="option === value"
      />
      {{ option }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["options", "value"]
}
</script>
