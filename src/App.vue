<template>
  <div id="app">
    <div class="logo"><h1>Advanced Vue.js Form</h1></div>
    <form-config-provider />
  </div>
</template>

<script>
import FormConfigProvider from "./components/FormConfigProvider.vue"

export default {
  name: "app",
  components: {
    FormConfigProvider
  }
}
</script>
<style>
@import "./assets/styles/main.css";
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
</style>
