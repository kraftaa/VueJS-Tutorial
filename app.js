new Vue({
    // properties
    // root instance to control
    el:'#vue-app',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function(){
            // two way data binding
            console.log('entered name');
        },
        logAge: function(){
            console.log('entered age');
    }
    }

});
