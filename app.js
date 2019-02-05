new Vue({
  // properties
  // root instance to control
  el:'#vue-app',
  data: {
    error: false,
    success: false

  },
  methods: {

  },
  computed: {
    compClasses: function() {
      return{
        available: this.available,
        nearby: this.nearby
      }
    }
}

});
