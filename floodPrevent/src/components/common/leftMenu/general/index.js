export default {
  props: {
    menuData: { type: Array, default: [] },
    menuName: { type: String, default: '' },
    thisTitle: { type: String, default: '' }
  },
  methods: {
    clickUrl(item) {
      this.$emit('update:menuName', item.title)
      this.utils.clickUrl(this, item)
    }
  }
}
