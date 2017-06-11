var vm = new Vue({
  el: '#class-example',
  data: {
    isActive: true,
    error: {
      type: 'fatal',
    },
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      }
    },
    styleObject() {
      return {
        color: 'red',
        fontSize: '13px',
      }
    }
  },
})
