<script>
// commentato perche non sono stati definiti i componenti
    import Header from './components/Header.vue'
    export default{
    components: {
      Header,
    }
  }
</script>

<template>
    <Header/>
    <router-view></router-view>
</template>

<style scoped lang="scss">
    @use './assets/sass/app.scss';

</style>
