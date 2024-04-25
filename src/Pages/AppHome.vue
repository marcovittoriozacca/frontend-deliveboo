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
        props: {
            activateType: String,
        },
        data(){
            return{
                store,
                restaurant:[],

                active_typologies: [],
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
            },
            activeTypologies(slug) {
                console.log(`Tipo attivato: ${slug}`);
            },
        },

        mounted(){
            this.types();
            this.restaurants();
        },
    }
    
</script>


<template>
    <div class="reset-header-height">
        <div id="bg-first-section">
            <div class="container">
                <div class="banner-max-w bg-white rounded-4 p-5">
                    <div class="row row-gap-5 justify-content-center flex-column align-items-center">
                        <!-- Banner hamburger -->
                        <div class="col-12">
                            <div class="position-relative responsive-margin-bottom">
                                <figure class=" banner-burger-position position-absolute">
                                    <img class="burger-img" src="/img/hofame.webp" alt="burger-image">
                                </figure>
                            </div>
                        </div>
    
                        <div class="col-12">
                            <!--Parte con Searchbar e titolo-->
                            <div class="d-flex flex-column gap-3 hofame-search">
                                <h2 class="m-0 text-center search-title">Cerca il tuo ristorante preferito!</h2>
                                <input class="form-control" type="text" placeholder="Cerca..." aria-label="Search">
                                <button class="btn btn-orange align-self-center" type="button">Ho Fame!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Qualsiasi cosa sotto all'immagine blurrata-->
    <div class="bg-blu">
        <!--Prima sezione blu con carosello-->
        <div>
            <Typologies
                @activate-type="activeTypologies"
            />
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

// <--------------- inizio stile del banner con l'hamburger --------------->
#bg-first-section{
    background-image: url('/img/bghome.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 80px;
    padding-bottom: 80px;
}
.banner-max-w{
    max-width: 936px;
    margin: 0 auto
}

.banner-burger-position{
    top: -100px;
    left: 50%;
    transform: translate(-50%);
}

.responsive-margin-bottom{
    margin-bottom: 25px;
}
.burger-img{
    width: 300px;
}

@media screen and (min-width: 768px) {
    #bg-first-section{
        padding-top: 100px;
    }
    .banner-burger-position{
        top: -120px;
    }
    //Immagine dell'hamburger nel banner in alto
    .responsive-margin-bottom{
        margin-bottom: 80px;
    }
    .burger-img{
        width: 400px;
    }
}
@media screen and (min-width: 992px) {
    //Immagine dell'hamburger nel banner in alto
    .responsive-margin-bottom{
        margin-bottom: 140px;
    }
    .burger-img{
        width: 550px;
    }
}
// <--------------- fine stile del banner con l'hamburger --------------->
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

    }

    @media screen and (max-width: 400px) {
        .diagonale-blu-alto-sinistra{
            height: 125px;
            margin-top: 50px;
        }

        .search-title{
            font-size: 24px;
        } 
    }

</style>