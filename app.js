new Vue({
    // properties
    // root instance to control
    el:'#vue-app',
    data: {
        age: 20,
        a:0,
        b:0
    },
    methods: {
        // addToA: function(){
        //     console.log('addtoA');
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //      console.log('addtoB');
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA: function(){
            console.log('addtoA');
            return this.a + this.age;
        },
        addToB: function(){
             console.log('addtoB');
            return this.b + this.age;
        }
    }

});
