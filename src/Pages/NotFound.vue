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
    <div class="page d-flex justify-content-start align-items-center pt-5 flex-column gap-5 gap-md-2">
        <img class="animate__animated animate__tada" src="/img/404img.png" alt="404">
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

@media screen and (max-width: 991px) {
  .page{
    width: auto;
    padding-top: 200px;
    align-items: center;
    text-align: center;
    h1{
        padding: 50px;
    }
    img{
        width: 500px;
        height: auto;
        margin-top: 100px;
    }
  }

}


@media screen and (max-width: 767px) {
    .page{
        img{
            width: 300px;
        }
    }
}


@media screen and (max-width: 300px) {
    .page{
        img{
            width: 150px;
        }
    }
}

</style>
