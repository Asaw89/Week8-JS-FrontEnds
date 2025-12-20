const app = Vue.createApp({
    data() {
        return {
            musicians: []
        }
    },
    async mounted() {
        this.musicians = await getAllMusicians();
    }
});

app.mount('#app');