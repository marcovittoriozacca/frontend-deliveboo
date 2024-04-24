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
    <div class="page d-flex justify-content-start align-items-center pt-5 flex-column gap-5">
        <img class="animate__animated animate__tada" src="../assets/img/404img.png" alt="404">
        <h1 class="">Whoops! Non abbiamo trovato la pagina che stai cercando</h1>
        
        <a class="link-orange btn btn-light animate__animated animate__heartBeat animate__delay-2s" href="http://127.0.0.1:8000">Portami alla home</a>
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
