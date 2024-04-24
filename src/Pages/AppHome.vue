<script>
    export default {
        name: "AppHome",
    }
    
</script>






<template>
    <div id="bg-first-section">
        <div class="bg-white">

        </div>
    </div>
    <section class="bg-blu">
        <div class="dritto-blu">
            <div class="diagonale-blu-alto-sinistra"></div>
        </div>
        <div class="arancione"></div>
        <div class="diagonale-blu-alto-destra"></div>
    </section>
    

    

  


</template>








<style lang="scss" scoped>
    #bg-first-section{
        background-image: url(../assets/img/bghome.png);
        background-repeat: no-repeat;
        filter: blur(4px);
        -webkit-filter: blur(4px);
        width: 100%;
        height: 500px;
    }

    .diagonale-blu-alto-sinistra{
        width: 100%;
        height: 900px;
        background: #03071e;
        z-index: 0;
        transform: skewY(3deg);
        transform-origin: top right;
        box-shadow: 0px 8px 5px 5px rgb(0, 0, 0, 0.5);
    }

    .diagonale-blu-alto-destra{
        position: relative;
        width: 100%;
        height: 900px;
        background: #03071e;
        z-index: 0;
        transform: skewY(-3deg);
        transform-origin: top left;
        box-shadow: 0px -8px 5px 5px rgb(0, 0, 0, 0.5);
    }

    .dritto-blu{
        padding-top: 150px;
        background: #03071e;
        width: 100%;
        height: 100px;
    }
    .arancione{
        background: #ff9654;
        height: 1800px;
        width: 100%;
    }

    .bg-white{
        background-color: white;
    }
       



</style>