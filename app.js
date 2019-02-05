new Vue({
    // properties
    // root instance to control
    el:'#vue-app',
    data: {
        age: 18,
        x: 0,
        y: 0
    },
    methods: {
        logName: function(){
            console.log('entered name');
        },
        logAge: function(){
            console.log('entered age');
    }
    }

});
