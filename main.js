const app = new Vue({
    el: "#root",
    data: {
        info: "",
        emailArray: []
    },
    methods: {},
    created() {
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => (this.emailArray.push(response.data.response)))
            ;
        }
    }
})