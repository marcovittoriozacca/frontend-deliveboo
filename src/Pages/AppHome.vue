<script>
import axios from 'axios';
import {store} from '../Store';
    export default {
        name: "AppHome",
        data(){
            return{
                store,
                restaurant:[],
            }
        },
        methods:{
            types(){
                axios.get('http://127.0.0.1:8000/api/type').then(res=>{
                    store.type=res.data,
                    console.log(store.type)
                })
            },
            restaurants(){
                axios.get('http://127.0.0.1:8000/api/restaurants').then(res=>{
                    this.restaurant=res.data,
                    console.log(this.restaurant)
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
                    <img src="../assets/img/hofame.webp" alt="image" class="hofame-img-width">
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
        <div class="carosello-blu">
            <h1 class="text-light">Prima sezione blu con carosello</h1>
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
                    <button class="Btn">
                        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H459.6c-7.5 0-14.7 2.6-20.5 7.4L391.7 78.9l-14-26c-7-12.9-20.5-21-35.2-21H280zM462.7 311.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>

                        <svg class="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>

                        <svg class="svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#8E8E8E" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>

                        <svg class="svg4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#8E8E8E" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>

                        <svg class="svg5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#8E8E8E" d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>

                        <span id="Lavora-con-noi">
                            Lavora con noi 
                        </span>
                    </button>
                </div>
            <div class="diagonale-blu-alto-sinistra"></div>
        </div>
        <div class="div-arancione">

            <!---Flex orizzontale Cards-->
            <div class="container d-flex flex-column flex-md-row flex-md-wrap justify-content-center row-gap-4 gap-4 align-items-md-stretch align-items-center">

                <!--Card 1-->
                <div class="card rounded-5 p-4 gap-2" style="width: 18rem;">
                    <img src="../assets/img/order.svg" class="card-img-top card-svg-height" alt="img">
                    <div class="card-body">
                        <p class="card-text text-center">
                            Ordina comodamente i tuoi piatti preferiti da casa. Consegna veloce e sicura, per un pasto delizioso in pochi clic.
                        </p>
                    </div>
                </div>

                <!--Card 2-->
                <div class="card rounded-5 p-4 gap-2" style="width: 18rem;">
                    <img src="../assets/img/ingredients.svg" class="card-img-top card-svg-height" alt="img">
                    <div class="card-body">
                        <p class="card-text text-center">
                            Scopri piatti freschi e autentici, preparati con i migliori ingredienti di stagione.
                        </p>
                    </div>
                </div>

                <!--Card 3-->
                <div class="card rounded-5 p-4 gap-2" style="width: 18rem;">
                    <img src="../assets/img/delivery.svg" class="card-img-top card-svg-height" alt="img">
                    <div class="card-body">
                        <p class="card-text text-center">
                            Consegna rapida e sicura, ovunque tu sia. Scegli i tuoi piatti preferiti e lascia che noi te li portiamo.
                        </p>
                    </div>
                </div>

                <!--Card 4-->
                <div class="card rounded-5 p-4 gap-2" style="width: 18rem;">
                    <img src="../assets/img/game.svg" class="card-img-top card-svg-height" alt="img">
                    <div class="card-body">
                        <p class="card-text text-center">
                            Goditi il divertimento a casa mentre noi ci occupiamo del resto! Scegli i tuoi piatti preferiti per un momento di puro piacere culinario.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="diagonale-blu-alto-destra"></div>
        
        <!--Inizio Ul Footer -->
        <div class="container pb-5">
            <div class="d-flex flex-column flex-md-row align-items-md-stretch align-items-center text-center gap-3 justify-content-between">
                <div>
                    <ul>
                        <li class="titleLi">
                            <span>Servizio clienti</span>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">domande frequenti</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">accedi</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">registrati</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">scarica l'app</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">segnala un problema</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li class="titleLi">
                            <span>Scopri di più su di noi</span>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">la nostra storia</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">il nostro impegno per la qualità</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">i nostri valori</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">unisciti al nostro team</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li class="titleLi">
                            <span>Cucine</span>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">pizza</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">giapponese</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">messicano</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">brasiliano</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">cinese</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li class="titleLi">
                            <span>Il nostro impegno</span>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">sostenibilità</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">modalità di consegna</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">carriera e opportunità</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">Promozioni attive</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li class="titleLi">
                            <span>Programmi</span>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">Programma fedeltà</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">Recensioni dei Clienti</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">Orari di apertura</a>
                        </li>
                        <li class="text-capitalize">
                            <a href="#">guida alla sicurezza alimentare</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
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
        background-image: url(../assets/img/bghome.jpg);
        background-repeat: no-repeat;
        width: 100%;
        height: 500px;
        padding-top: 200px;
    }

    .fs-64{
        font-size: 64px;
    }

    .fs-52{
        font-size: 52px;
    }

    .carosello-blu{
        background: #03071e;
        padding-top: 300px;
        width: 100%;
        height: 700px;
        border: 1px solid red;
    }

    .ristoranti-arancione{
        background: #ff9654;
        width: 100%;
        height: 700px;
        border: 1px solid red;
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
        padding-bottom: 200px;
        width: 100%;
        padding-top: 300px;
        padding-bottom: 250px;
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

    ul{
        list-style-type: none;
    }

    ul>li>a{
        text-decoration: none;
        color: rgb(255, 255, 255, 0.5);
    }

    .titleLi{
        color: white;
        font-weight: bold;
    }

    .card-svg-height{
        height: 200px;
    }

    .Btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: none;
        padding: 0px 20px;
        background-color: #f58115;
        color: white;
        font-weight: 500;
        cursor: pointer;
        border-radius: 10px;
        transition-duration: .3s;
        overflow: hidden;
        padding-block: 5px;
        padding-inline: 40px;
        font-weight: bold;
        font-size: 32px;
    }
  
    #Lavora-con-noi{
        padding-left: 70px;
    }

    .svg2{
        top: 20px;
        display: none;
    }

    .svg,
    .svg2,
    .svg3,
    .svg4,
    .svg5{
        width: 30px;
        position: absolute;
        right: 100;
        margin-right: 20px;
        fill: white;
        transition-duration: .3s;
    }
    

    .svg3,
    .svg4,
    .svg5{
        width: 8px;
        top: 40%;
        display: none;
        opacity: 100%;
    }

    .Btn:hover {
        color: transparent;
    }
  
    .Btn:hover svg {
        right: 10%;
        margin: 0;
        padding: 0;
        border: none;
        transition-duration: .2s;
    }

    .Btn:hover .svg3 {
        right: 22%;
    }

    .Btn:hover .svg4 {
        right: 30%;
        top: 30%;
    }

    .Btn:hover .svg5 {
        right: 38%;
        top: 40%;
    }

    .Btn:hover svg  {
        animation: bounce 0.3s infinite alternate;
    }


    .Btn:hover .svg3  {
        animation: bouncedot 0.7s infinite alternate;
    }

    .Btn:hover .svg4  {
        animation: bouncedot 0.755s infinite alternate;
    }

    .Btn:hover .svg5  {
        animation: bouncedot 0.78s infinite alternate;
    }
    
    @keyframes bounce {
        0% {
        transform: translateY(0);
        }
        100% {
        transform: translateY(-2px);
        }
    }

    @keyframes bouncedot {
        0% {
        transform: translateY(0);
        width: 0px;
        /* opacity: 0%; */
        }
        50% {
            transform: translateY(-1);
            width: 10px;
            /* opacity: 100%; */
        }
        100% {
        transform: translateY(-2px);
        width: 0px;
        /* opacity: 0%; */
        }
    }

    .Btn:hover .svg2 {
        display: inline-block;
    }

    .Btn:hover .svg3 {
        display: inline-block;
    }

    .Btn:hover .svg4 {
        display: inline-block;
    }

    .Btn:hover .svg5 {
        display: inline-block;
    }

    .Btn:hover .svg2 {
        animation: stripes 0.5s linear infinite ;
    }

    @keyframes stripes {
        0% {
        transform: translateX(2000%);
        }
        100% {
        transform: translateX(-2000%);
        }
    }
  
    .Btn:active {
        transform: translate(3px , 3px);
        transition-duration: .3s;
    }

    .bg-blu{
        background-color: #03071E ;
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
        .Btn {
            padding-block: 5px;
            padding-inline: 20px;
            font-size: 18px;
        }

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