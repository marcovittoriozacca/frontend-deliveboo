<script>
import { router } from "../router";
import {store} from '../Store';
export default {
    name:'Success',
    data() {
        return {
            store,
                
        }
    },
    mounted(){
        this.reset();

    },
    methods: {
        reset(){

            store.listplatelocalstorage=[];
            setTimeout(() => {
                store.actualrestaurant="";    
            }, 150);

            setTimeout(() => {
                router.push({ name: "home" }); 
            }, 3500);

        
            console.log(store.actualrestaurant)
            localStorage.clear();
        }
    },
}
</script>

<template>
    <div class="bg-container">
        <div class="banner p-5 text-center rounded-top-5 d-flex justify-content-center flex-column">
            <figure>
                <img src="../../public/img/success.svg" alt="">
            </figure>
            <!-- testo e titolo -->
            <h1 class="my-4">Fantastico</h1>
            <p>
                Ecco la conferma del tuo ordine! Il pagamento è stato elaborato con successo. Grazie per aver completato il pagamento. Se hai domande o dubbi, non esitare a contattarci.
            </p>
            <p>
                A breve verrai reindirizzato alla home, se non accade premere il pulsante OK in basso
            </p>
        </div>
        <!-- parte arancione con bottone ok  -->
        <div class="orange-banner rounded-bottom-5 d-flex justify-content-center p-4 ">
            <router-link :to="{name:'home'}" class="border rounded-4">
                <span class="btn btn-lg text-light">Ok</span>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
.bg-container{
    background-color: $light-gray;
    height: 100vh;
    padding: 30px;
}
.banner{
    background-color: $dark-navy-blue;
    color: $base-orange;
    margin: auto;
    width: 60%;
    img{
        width: 400px;
    }

}

.orange-banner{
    background-color: $orange;
    margin: auto;
    width: 60%;
    a{
        background-color: $dark-navy-blue;
        color: white;
    }
}

@media screen and (max-width: 768px){
    .banner{
        width: 80%;
        img{
            width: 100%;
        }
    }
    .orange-banner{
        width: 80%;
    }
}
</style>