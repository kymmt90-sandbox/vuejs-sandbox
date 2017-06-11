var vm = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question(newQuestion) {
      this.answer = 'Waiting for you to stop typing....'
      this.getAnswer();
    }
  },
  methods: {
    getAnswer: _.debounce(
      function() {
        this.answer = 'Thinking...'
        var vm = this
        axios.get('http://pokeapi.co/api/v2/pokemon/' + this.question)
          .then(function(response) {
            vm.answer = _.capitalize(response.data.name)
          })
          .catch(function(error) {
            vm.answer = 'Error! Could not reach the API.' + error
          })
      },
      500
    )
  }
});
