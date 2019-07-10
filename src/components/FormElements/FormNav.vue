<template>
  <div>
    <form-progress />
    <div class="nav">
      <div class="form-button" @click="$emit('back')">Previous</div>
      <div class="form-button" @click="$emit('next')">Next</div>
    </div>
  </div>
</template>
<script>
import FormProgress from "./FormProgress.vue"
export default {
  name: "form-nav",
  components: {
    "form-progress": FormProgress
  }
}
</script>
