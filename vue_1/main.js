new Vue({
    el: '#app',
    data: {
        count: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        message: 'Hello Vue.js!',
        item: {
            id: 1,
            src: 'https://qph.fs.quoracdn.net/main-qimg-b13a06c817d49f236f61a27dc2f7e9dc'
        },
        radius: 50

    },
    methods: {
        increment: function(){
            this.count += 1
        }
    }
})