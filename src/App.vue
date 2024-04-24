<script>
// commentato perche non sono stati definiti i componenti
    import Header from './components/Header/Header.vue'
    import Footer from './components//Footer/Footer.vue'
    export default{
    components: {
        Header,
        Footer,
    }
  }
</script>

<template>

    <header>
        <Header/>
    </header>

    <main>
        <router-view></router-view>
    </main>

    <footer>
        <Footer/>
    </footer>
</template>

<style scoped lang="scss">


</style>
