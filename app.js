new Vue({
  // properties
  // root instance to control
  el:'#vue-app',
  data: {
    output: "fav food"
  },
  methods: {
    readRefs: function(){
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }
  },
  computed: {

  }

});
