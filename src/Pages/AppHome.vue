<script>
import axios from 'axios';
import {store} from '../Store';

import Typologies from '../components/HomeComponents/Typologies.vue';
import InfoCard from '../components/HomeComponents/InfoCard.vue';
import WorkWithUsBtn from '../components/GeneralComponents/WorkWithUsBtn.vue';
import Restaurant from '../components/Restaurant.vue'
import Loader from '../components/GeneralComponents/Loader.vue'
import AnimationComp from '../components/HomeComponents/AnimationComp.vue'

    export default {
        name: "AppHome",
        components:{
            Typologies,
            InfoCard,
            WorkWithUsBtn,
            Restaurant,
            Loader,
            AnimationComp,
        },
        data(){
            return{
                store,
                restaurants:[],
                ContolloRistorante:[],
            }
        },
        methods:{
            async types(){
                store.typesLoading = true;
                await axios.get('http://127.0.0.1:8000/api/type').then(res=>{
                    store.type=res.data.type;
                    store.typesLoading = false;
                }).catch(error => {
                console.error('Errore durante la richiesta API:', error);
                store.typesLoading = false;
                });
            },

            async getRestaurants(){
                store.restaurantLoading = true;
                await axios.get('http://127.0.0.1:8000/api/restaurants').then(res=>{
                    this.restaurants = res.data.restaurant;
                    store.restaurantLoading = false;
                })
                .catch(error => {
                console.error('Errore durante la richiesta API:', error);
                store.restaurantLoading = false;
                });
            },

            removeBadge(type){
                const index = store.active_typologies.indexOf(type);
                store.active_typologies.splice(index, 1);
            },
            // al caricamento della pagina va aggiornato l'array degli ordini presenti nello store con gli ordini presenti nel local storage

            
        

        },

        mounted(){
            this.types();
            this.getRestaurants();
          
            
        },
        
        
        watch: {
        'store.active_typologies': {
            handler(newVal, oldVal) {

                store.filtered_restaurants = this.restaurants.filter(restaurant => {
                // Controlla se almeno una tipologia del ristorante è presente nelle tipologie attive
                return restaurant.types.some(type => store.active_typologies.includes(type.slug));

                });
            },
            deep: true
        }
    }
}

    
</script>


<template>
<!--Slogan Deliveboo -->
<div class="reset-header-height">
    <div id="bg-first-section">
        <div class="container">
            <div class="banner-max-w bg-box rounded-4 p-5">
                <div class="row align-items-center">
                    
                        
                        <AnimationComp/>
                    
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
            />
        </div>

        <!--Prima sezione arancione con risultati ricerca?-->
        <div class="ristoranti-arancione">

            <div class="pills-container container d-flex align-items-center column-gap-2 overflow-y-scroll">
                <span v-for="(type, index) in store.active_typologies" :key="type.id">
                    <div class="rounded-pill badge bg-danger d-flex align-items-center fit-content py-1 fs-6">
                        <span class="border-end pe-2 text-capitalize">{{ type }}</span>
                        <span class="ps-2 cursor-pointer" @click="removeBadge(type)">
                            <i class="fas fa-xmark"></i>
                        </span>
                    </div>
                </span>
            </div>

            <div class="py-4">
                <div class="container">
                    <!-- Card ristorange generica. All'interno del componente vengono ciclati gli altri ristoranti e verranno mostrati solo quelli -->
                    <!-- con la corretta tipologia -->
                    <Loader v-if="store.restaurantLoading"/>
                    <div v-else>
                        <div v-if="store.filtered_restaurants.length > 0 ||  restaurants.length > 0">
                            <div v-for="(restaurant, index) in (store.filtered_restaurants.length > 0)? store.filtered_restaurants : restaurants " :key="restaurant.id">
                                <Restaurant
                                    :restaurant="restaurant"
                                />
                                <hr v-if="index != store.filtered_restaurants.length -1 && index != restaurants.length-1">
                            </div>    
                        </div>
                        <div v-else class="text-center d-flex flex-column gap-4 py-5">
                            <h1 class="fw-bold animate__animated animate__fadeIn">Sfortunatamente al momento non sono stati trovati risultati con le tipologie selezionate</h1>
                            <h2 class="animate__animated animate__fadeIn">Selezione altre tipologie di cucina</h2>
                            <h3 class="animate__animated animate__fadeIn">Siamo sicuri che ci saranno ristoranti buonissi!</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <!--Sezione blu con pulsante di registrazione ristoratori-->
        <div class="dritto-blu">
            <div class="d-flex flex-column align-items-center gap-5 container text-center">
                    <h1 class="text-light fs-64">Hai una attività di ristorazione e vuoi crescere insieme a noi?</h1>
                    <h2 class="text-light fs-52 w-75">Clicca il Pulsante in basso e registra subito la tua attività!</h2>
                    <WorkWithUsBtn/>
                </div>
            <div class="diagonale-blu-alto-sinistra"></div>
        </div>

        <div class="div-arancione">
            <InfoCard/>
        </div>

        <div class="diagonale-blu-alto-destra"></div>
        
    </div>
</template>

<style lang="scss" scoped>

@use '../assets/sass/partials/variables' as *;

// <--------------- inizio stile del banner con l'hamburger --------------->
#bg-first-section{
    background-image: url('/img/bghome.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 80px;
    padding-bottom: 80px;
}

#title{
color: $orange;
}


    hr{
        border: 0.5px solid gray;
        opacity: 1;
        width: 90%;
        margin: 20px auto
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
.pills-container{
    height: 40px;
}
.fit-content{
    width: fit-content;
}
.cursor-pointer{
    cursor: pointer;
}


// <--------------- fine stile del banner con l'hamburger --------------->
    .ristoranti-arancione{
        background: #ff9654;
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


    .bg-box {
        background-color: #03071E
    }

</style>