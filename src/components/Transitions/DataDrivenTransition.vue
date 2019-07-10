<script>
export default {
  functional: true,
  props: {
    isNext: {
      default: true
    }
  },
  render(h, context) {
    var data = {
      props: {
        appear: true,
        appearActiveClass: "animated fadeInUp",
        enterActiveClass: context.props.isNext ? "animated fadeInUp" : "animated fadeInDown",
        leaveActiveClass: context.props.isNext ? "animated fadeOutUp" : "animated fadeOutDown",
        name: "data-driven-transition",
        duration: 1000,
        mode: "out-in"
      }
    }
    return h("transition-group", data, context.children)
  }
}
</script>
