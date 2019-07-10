import Vue from "vue"

Vue.directive("colorswatch", function(el, binding) {
  let colors = [
    { light: "#d1c4e9", dark: "#4527a0" },
    { light: "#c5cae9", dark: "#283593" },
    { light: "#bbdefb", dark: "#1565c0" },
    { light: "#b3e5fc", dark: "#0277bd" },
    { light: "#b2ebf2", dark: "#00838f" },
    { light: "#b2dfdb", dark: "#00695c" },
    { light: "#c8e6c9", dark: "#2e7d32" },
    { light: "#dcedc8", dark: "#558b2f" },
    { light: "#f0f4c3", dark: "#9e9d24" },
    { light: "#fff9c4", dark: "#f9a825" },
    { light: "#ffecb3", dark: "#ff8f00" },
    { light: "#ffe0b2", dark: "#ef6c00" },
    { light: "#ffccbc", dark: "#d84315" }
  ]
  colors.map((color, key) => {
    if (key === binding.value) {
      if (binding.arg === "color") {
        el.style.color = color.dark
      } else if (binding.arg === "bg") {
        el.style.backgroundColor = color.light
      }
    }
  })
})
