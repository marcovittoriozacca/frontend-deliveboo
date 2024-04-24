<script>
import axios from 'axios';
import {store} from '../Store';

import Typologies from '../components/HomeComponents/Typologies.vue';
import InfoCard from '../components/HomeComponents/InfoCard.vue';
import WorkWithUsBtn from '../components/GeneralComponents/WorkWithUsBtn.vue';

    export default {
        name: "AppHome",
        components:{
            Typologies,
            InfoCard,
            WorkWithUsBtn,
        },
        data(){
            return{
                store,
                restaurant:[],
            }
        },
        methods:{
            types(){
                axios.get('http://127.0.0.1:8000/api/type').then(res=>{
                    store.type=res.data.type
                })
            },
            restaurants(){
                axios.get('http://127.0.0.1:8000/api/restaurants').then(res=>{
                    this.restaurant=res.data.restaurant
                })
            }
        },

        mounted(){
            this.types();
            this.restaurants();
        },
    }
    
</script>


<template>
    <div id="bg-first-section">

        <!--Container bianco con img e searchbar-->
        <div class="bg-white container rounded-5 translate-middle position-absolute start-50 ">

            <!--Contenitore che permette lo spostamento dell'immagine al di fuori del div bianco-->
            <div class="hofame-relative">

                <!--Immagine spostata-->
                <div class="hofame-absolute">
                    <img src="/img/hofame.webp" alt="image" class="hofame-img-width">
                </div>

                <!--Parte con Searchbar e titolo-->
                <div class="d-flex flex-column gap-3 hofame-search">
                    <h2 class="m-0 text-center search-title">Cerca il tuo ristorante preferito!</h2>
                    <form class="d-flex flex-column gap-3" role="search">
                        <input class="form-control me-2 align-self-center searchbar-width" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-orange align-self-center" type="submit">Ho Fame!</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!--Qualsiasi cosa sotto all'immagine blurrata-->
    <div class="bg-blu">
        <!--Prima sezione blu con carosello-->
        <div>
            <Typologies/>
        </div>

        <!--Prima sezione arancione con risultati ricerca?-->
        <div class="ristoranti-arancione">
            <h1 class="text-light">Prima sezione arancione con risultati ricerca?</h1>
        </div>

        <!--Sezione blu con pulsante di registrazione ristoratori-->
        <div class="dritto-blu">
            <div class="d-flex flex-column align-items-center gap-5 container text-center">
                    <h1 class="text-light fs-64">Hai una attività di ristorazione e vuoi crescere insieme a noi?</h1>
                    <h2 class="text-light fs-52 w-75">Clicca il Pulsante in basso e registra subito la tua attività</h2>
                    <WorkWithUsBtn/>
                </div>
            <div class="diagonale-blu-alto-sinistra"></div>
        </div>

        <div class="div-arancione">
            <InfoCard/>
        </div>

        <div class="diagonale-blu-alto-destra"></div>
        
    </div>

    <!-- offcanvas -->
    <div class="offcanvas canva offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>

</template>

<style lang="scss" scoped>

    .searchbar-width{
        width: 50%;
    }

    #bg-first-section{
        background-image: url('/img/bghome.jpg');
        background-repeat: no-repeat;
        
        height: 500px;
        padding-top: 200px;
    }

    .ristoranti-arancione{
        background: #ff9654;
        width: 100%;
        height: 700px;
    }

    .diagonale-blu-alto-sinistra{
        width: 100%;
        height: 150px;
        background: #03071e;
        transform: skewY(3deg);
        transform-origin: top right;
        box-shadow: 0px 8px 5px 5px rgb(0, 0, 0, 0.5);
        margin-top: 100px;
    }

    .diagonale-blu-alto-destra{
        position: relative;
        width: 100%;
        height: 100px;
        background: #03071e;
        transform: skewY(-3deg);
        transform-origin: top left;
        box-shadow: 0px -8px 5px 5px rgb(0, 0, 0, 0.5);
    }

    .dritto-blu{
        padding-top: 100px;
        background: #03071e;
        width: 100%;
        height: 650px;
    }
    .div-arancione{
        background: #ff9654;
        padding: 17em 0 13em 0;
    }

    .bg-white{
        background-color: white;
        height: 500px;
        top: 65%;
    }

    .btn-orange{
        background-color: #f58115;
        color: white;
        font-weight: bold;
        font-size: 22px;
        padding-block: 5px;
        padding-inline: 80px;
    }

    .btn-orange:hover{
        background-color: rgb(245, 129, 21);
    }

    .search-title{
        color: #f58115;
        font-weight: bold;
        font-size: 48px;
    }

    .hofame-relative{
        position: relative;
    }

    .hofame-absolute{
        position: absolute;
        left: 42%;
        transform: translate(-50%, -50%)
    }
    .hofame-img-width{
        width: 130%;
        height: auto;
    }

    .hofame-search{
        padding-top: 280px;
    }

    
    .card-svg-height{
        height: 200px;
    }

    
    .bg-blu{
        background-color: #03071E ;
    }

    .fs-64{
        font-size: 64px;
    }

    .fs-52{
        font-size: 52px;
    }

    @media screen and (min-width: 992px) {
        .canva{
            width: 30%!important;
        }
    }

    @media screen and (max-width: 992px) {
        .fs-64{
        font-size: 25px;
        }
        .fs-52{
            font-size: 18px;
        }

        .dritto-blu{
            height: 500px;
        }

        .search-title{
            font-size: 32px;
        }   

        .bg-white{
            height: 350px;
            top: 65%;
        }

        .hofame-search{
            padding-top: 20%;
        }
    }

    @media screen and (max-width: 768px){
        .searchbar-width{
            width: 100%;
        }
    }

    @media screen and (max-width: 400px) {
        .diagonale-blu-alto-sinistra{
            height: 125px;
            margin-top: 50px;
        }

        .search-title{
            font-size: 24px;
        } 

        .hofame-search{
            padding-top: 35%;
            padding-bottom: 10%;
        }

    }

</style>