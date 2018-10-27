var bus = new Vue()

bus.$emit('bus-event')



Vue.component('comp-child', {
    template: '<li>{{ name }} HP,{{ hp }}<button v-on:click="doAttack">攻撃する</button></li>',
    props: {
        id: Number,
        name: String,
        hp: Number
    },
    methods: {
        doAttack: function(){
            this.$emit('attack',this.id)
        }
    }
})

new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    },
    methods: {
        // attackが発生した！
        handleAttack: function (id) {
            // 引数のIDから要素を検索
            var item = this.list.find(function (el) {
                return el.id === id
            })
            // HPが0より多ければ10減らす
            if (item !== undefined && item.hp > 0) item.hp -= 10
        }
    }
})