<script>
// commentato perche non sono stati definiti i componenti
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    export default{
    components: {
        Header,
        Footer,
    }
  }
</script>

<template>
    <Header/>
    <router-view></router-view>
    <Footer/>
</template>

<style scoped lang="scss">
    @use './assets/sass/app.scss';

</style>
