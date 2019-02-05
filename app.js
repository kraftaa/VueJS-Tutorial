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
        add: function(inc){
           this.age += inc;
        },
        subtract: function(dec){
           this.age -= dec;
        },
        updateXY: function(event){
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function () {
            alert('clicked');
        }
    }

});
