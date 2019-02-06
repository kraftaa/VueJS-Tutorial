Vue.component('greeting', {
  template:'<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
  data: function(){
    return{
      name:"Yoshi"
    }
  },
  methods: {
    changeName:function(){
      this.name='Mario';
    }
  }

});


new Vue({
  // properties
  // root instance to control
  el:'#vue-app-one',
  data: {

  },
  methods: {

  },
  computed: {

  }

});

new Vue({
  // properties
  // root instance to control
  el:'#vue-app-two',
  data: {

  },
  methods: {

  },
  computed: {
    }


});


two.title = "Changed from outside";
