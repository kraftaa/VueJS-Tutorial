var one = new Vue({
  // properties
  // root instance to control
  el:'#vue-app-one',
  data: {
    title:'Vue App One'
  },
  methods: {

  },
  computed: {
    greet: function(){
      return "Hello from app one";
    }
  }

});

var two = new Vue({
  // properties
  // root instance to control
  el:'#vue-app-two',
  data: {
    title:'Vue App Two'
  },
  methods: {
    changeTitle: function(){
      one.title = "title changed";
    }
  },
  computed: {
    greet: function(){
      return "Yo this is app two";
    }
  }

});


two.title = "Changed from outside";
