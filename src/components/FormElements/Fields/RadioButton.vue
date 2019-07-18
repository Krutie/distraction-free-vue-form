<template>
  <div>
    <label v-for="(option, key) in options" :key="key">
      <input type="radio" :value="option" @input="$emit('input', $event.target.value)" :checked="option === value" />
      {{ option }}
    </label>
  </div>
</template>
<script>
export default {
  props: ["options", "value"]
}
</script>
