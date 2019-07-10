<script>
import { getComponent } from "./ComponentTypes"
import formConfig from "../config/formConfig.json"

export default {
  name: "form-config-provider",
  functional: true,
  render(createElement) {
    let fieldObjects = formConfig.map(field => {
      let component = getComponent(field.type)
      return { ...field, component }
    })
    return createElement(getComponent("formTemplate"), {
      props: {
        formFields: fieldObjects
      }
    })
  }
}
</script>
