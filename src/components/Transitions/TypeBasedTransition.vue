<script>
const TYPE_MAP = {
  fadeInOut: {
    enter: "fadeIn",
    leave: "fadeOut",
    duration: 800
  },
  fadeUpDown: {
    enter: "fadeInUp",
    leave: "fadeOutDown",
    duration: 800
  }
}

export default {
  functional: true,
  props: {
    transitionType: {
      default: "fadeInOut"
    }
  },
  render(h, context) {
    let enterClass = "animated " + TYPE_MAP[context.props.transitionType].enter
    let leaveClass = "animated " + TYPE_MAP[context.props.transitionType].leave
    var data = {
      props: {
        enterActiveClass: enterClass,
        leaveActiveClass: leaveClass,
        name: "type-based-transition",
        mode: "out-in",
        duration: TYPE_MAP[context.props.transitionType].duration
      }
    }
    return h("transition", data, context.children)
  }
}
</script>
