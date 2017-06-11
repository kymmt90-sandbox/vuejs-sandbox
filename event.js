var vm = new Vue({
  el: '#event-example',
  data: {
    counter: 0,
  }
})

var vm2 = new Vue({
  el: '#event-example-2',
  data: {
    name: 'Vue.js',
  },
  methods: {
    greet(event) {
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    },
  },
})

var vm3 = new Vue({
  el: '#event-example-3',
  methods: {
    say(message) {
      alert(message)
    },
  },
})
