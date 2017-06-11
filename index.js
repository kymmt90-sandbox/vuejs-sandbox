var vm = new Vue({
  el: '#example',
  data: {
    message: 'this is test',
    number: 1,
    ok: true,
    url: 'https://pepabo.com/'
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  }
})

var demoVm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
})
