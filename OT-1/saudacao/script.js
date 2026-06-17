var app = new Vue({
    el: '#app',
    data: {
        name: ''
    },
    computed: {
        greeting: function() {
            if (this.name === '') {
                return 'Digite seu nome acima!'
            }
            return 'Olá, ' + this.name + '!!'
        }
    }
})