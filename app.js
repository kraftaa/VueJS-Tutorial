new Vue({
    // properties
    // root instance to control
    el:'#vue-app',
    data: {
        name: 'Maria',
        job: 'Developer',
        site: 'https://github.com/kraftaa',
        siteTag:'<a href="https://github.com/kraftaa">Site Tag</a>'
    },
    methods: {
        greet: function(time){

            return 'Good '+ time + ' ' + this.name;
        }
    }
});
