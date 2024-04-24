<script>

export default{
    name: "NotFound",
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="page d-flex justify-content-center align-items-center flex-column gap-5">
        <img class="animate__animated animate__tada" src="/img/404img.png" alt="404">
        <h1 class="">Whoops! Non abbiamo trovato la pagina che stai cercando</h1>

        <a class="link-orange btn btn-light animate__animated animate__heartBeat animate__delay-2s" href="http://localhost:5174/">Portami alla home</a>
    </div>
</template>

<style scoped lang="scss">
.page{
    background-color:#15182d;
    height: 100vh;
}
h1{
    color:#ff9654 ;
}
</style>
