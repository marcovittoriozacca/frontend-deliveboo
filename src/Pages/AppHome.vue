<script>
    export default {
        name: "AppHome",
    }
    
</script>






<template>
    <div id="bg-first-section">
        <div>

        </div>
    </div>
    <section>
        <div class="dritto-blu">
            <div class="diagonale-blu"></div>
        </div>
        
    </section>
    

    

  


</template>








<style lang="scss" scoped>
    #bg-first-section{
        background-image: url(../assets/img/bghome.png);
        background-repeat: no-repeat;
        filter: blur(4px);
        -webkit-filter: blur(4px);
        width: 100vw;
        height: 500px;
    }

    .diagonale-blu {
        width: 100%;
        height: 500px;
        background: #03071e;
        z-index: 0;
        transform: skewY(3deg);
        transform-origin: top right;
    }
    .dritto-blu{
        padding-top: 150px;
        background: #03071e;
        width: 100%;
        height: 100px;
    }
       



</style>