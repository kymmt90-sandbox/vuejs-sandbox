var vm = new Vue({
  el: '#list-example',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
    ],
  },
})

var repeatVm = new Vue({
  el: '#repeat-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
  }
})
