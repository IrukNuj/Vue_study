var app = new Vue({
    el: '#app',
    data: {
        name: "",
        list: [
            {id: 1, name: 'スライム', hp: 100},
            {id: 2, name: 'ゴブリン', hp: 200},
            {id: 3, name: 'ドラゴン', hp: 500}
        ]
    },
    created: function () {
        this.list.forEach(function (item) {
            Vue.set(item, 'active', false)
        })
    },
    methods: {
        doadd: function () {
            var max = this.list.reduce(function (a, b) {
                return a > b.id ? a : b.id
            }, 0)
            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function (index) {
            this.list.splice(index, 1)
        },
        doAttack: function (index) {
            this.list[index].hp -= 10
        },
        doFilter: function () {
            this.list = this.list.filter(function (el) {
                return el.hp >= 100
            })
        }
    },
    mounted: function () {
        console.log(this.$refs.test)
    }
})