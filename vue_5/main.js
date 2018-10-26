new Vue({
    el: '#app',
    data: {
        list: [],
        current: '',
        topics: [
            { value: 'IrukNuj', name: 'Iruk' },
            { value: 'jQuery', name: 'jQuery' }
        ]
    },
    watch: {
        current: function (val) {
            // GitHubのAPIからトピックのリポジトリを検索
            axios.get('https://api.github.com/search/repositories', {
                params: {
                    // q: 'topic:' + val
                    q: 'user:' + val
                }
            }).then(function (response) {
                this.list = response.data.items
            }.bind(this))
        }
    },
})