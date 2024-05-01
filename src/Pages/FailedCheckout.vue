<script>
export default {
    name:'FailedCheckout',
}
</script>



<template>
    <div id="bg-pagina">
        <div id="container-output" class="m-auto py-5">
            <div id="top-portion" class="p-5 rounded-top-5 d-flex justify-content-center align-items-center">
                <div class="d-flex flex-column align-items-center justify-content-center gap-3">
                    <img id="failed-img" src="../../public/img/pagamento-rifiutato.svg" alt="pagamento-rifiutato">
                    <h1 id="titolo-richiesta" class="text-center">Pagamento Rifiutato</h1>
                    <h5 id="sotto-titolo-richiesta" class="text-center">C'è stato un problema con il tuo metodo di pagamento, per favore controlla il metodo di pagamento e riprova</h5>
                </div>
            </div>
    
            <div id="bottom-portion" class="p-5 rounded-bottom-5 d-flex justify-content-center align-items-center">
                <router-link :to="{name:'checkout'}">
                    <a id="riprova-btn" href=#>Riprova</a>
                </router-link>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    #top-portion{
        background-color: #15182D;
        -webkit-box-shadow: 0px -3px 15px 1px #000000; 
        box-shadow: 0px -3px 15px 1px #000000;
    }

    #bottom-portion{
        background-color: #D00000;
        -webkit-box-shadow: 0px 8px 15px 1px #000000; 
        box-shadow: 0px 8px 15px 1px #000000;
    }

    #failed-img{
        width: 70%;
    }

    #container-output{
        width: 30%;
        margin: 0 auto;
    }

    #riprova-btn{
        border: none;
        background-color: #15182D;
        padding-inline: 15px;
        padding-block: 5px;
        border-radius: 7px;
        font-size: 24px;
    }

    #titolo-richiesta{
        color: #D00000;
    }

    #sotto-titolo-richiesta{
        color: #f58115;
    }

    #bg-pagina{
        background-color: #E0E2E6;
    }

    @media screen and (max-width: 1199px) {
        #container-output{
            width: 50%;
            margin: 0 auto;
        }
    }

    @media screen and (max-width: 700px) {
        #titolo-richiesta{
            font-size: 20px;
        }

        #sotto-titolo-richiesta{
            font-size: 14px;
        }
    }
</style>