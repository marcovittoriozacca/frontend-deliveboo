<script>
// commentato perche non sono stati definiti i componenti
    import Header from './components/Header/Header.vue'
    import Footer from './components//Footer/Footer.vue'
    import { store } from './Store';
    export default{
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        findorder(){
                this.ContolloRistorante=Object.keys(localStorage)
                console.log(this.ContolloRistorante)
            
            this.ContolloRistorante.forEach(element => {
                if(element.includes("restaurant")){
                    //se è presente una chiave che contiene la parola restaurant e non corrisponde con la chiave del ristorante attuale 
                store.listplatelocalstorage=JSON.parse(localStorage.getItem(element))
                    
                }
            });
            }
    },
    created() {
        this.findorder();
    },
  }
</script>

<template>

    <header>
        <Header/>
    </header>

    <main>
        <router-view></router-view>
    </main>

    <footer v-if="store.showfooter">
        <Footer/>
    </footer>
</template>

<style scoped lang="scss">

@use './assets/sass/app.scss' as *;

</style>
