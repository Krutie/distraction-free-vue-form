<template>
  <div class="bar"></div>
</template>
<script>
import { TimelineLite } from "gsap"
export default {
  name: "form-progress",
  inject: ["formState"],
  computed: {
    percent() {
      return (this.formState.activeField / this.formState.formLength) * 100
    }
  },
  watch: {
    percent(newVal) {
      let el = document.getElementsByClassName("bar")
      let tl = new TimelineLite()
      tl.to(el, 1, {
        width: newVal + "%"
      })
    }
  }
}
</script>
