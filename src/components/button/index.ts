import { defineComponent } from 'vue'

export const Button = defineComponent({
  name: 'Button',
  props: {
    text: { type: String },
  },
  template: `<button>{text}</button>`,
})
