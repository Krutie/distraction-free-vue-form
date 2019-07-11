import { TimelineLite, Elastic } from "gsap"

export default {
  data() {
    return {
      // local object variable to store form data
      formData: {},

      // Reactive object to be used for Provide/Inject
      formState: {
        activeField: 0,
        isNext: true,
        formLength: this.formFields.length,
        isComplete: false,
        isValid: false
      }
    }
  },
  computed: {
    activeFieldName() {
      return this.fields[this.formFields[this.formState.activeField].name]
    },
    isCurrentFieldValid() {
      if (this.isLastField) {
        return this.activeFieldName && this.activeFieldName.valid
      }
    },
    isLastField() {
      return this.formState.activeField < this.formState.formLength
    }
  },
  watch: {
    isLastField(newValue) {
      !newValue ? (this.formState.isComplete = true) : (this.formState.isComplete = false)
    },
    isCurrentFieldValid(newValue) {
      newValue ? (this.formState.isValid = true) : (this.formState.isValid = false)
    }
  },
  methods: {
    next() {
      this.formState.isNext = true
      this.isCurrentFieldValid ? this.proceed() : this.decline(".field-area")
    },
    back() {
      this.formState.isNext = false
      this.formState.activeField > 0 ? this.formState.activeField-- : ""
    },
    submit() {
      this.formState.isNext = true
      this.isCurrentFieldValid ? this.proceed() : ""
    },
    proceed() {
      this.isLastField ? this.formState.activeField++ : ""
    },
    decline(element) {
      // Shake form area when the field is invalid
      var tl = new TimelineLite()
      tl.to(element, 0.1, { x: 30 })
      tl.to(element, 3, {
        x: 0,
        color: "#ef6574",
        ease: Elastic.easeOut.config(0.9, 0.1)
      })
    }
  }
}
