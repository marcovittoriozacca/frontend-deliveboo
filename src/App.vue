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
