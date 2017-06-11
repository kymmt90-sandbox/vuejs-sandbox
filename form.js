var vm = new Vue({
  el: '#form-example',
  data: {
    message: '',
    checkedNames: [],
    selected: '',
    options: [
      { text: 'A', value: 'A' },
      { text: 'B', value: 'B' },
      { text: 'C', value: 'C' },
    ],
  },
})
