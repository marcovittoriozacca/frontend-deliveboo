<script>
import {store} from "../Store"
import CartCard from "./Header/CartCard.vue"
    export default {
        name:"Cart",
        components:{
            CartCard,
        },
        data() {
            return {
                store,
                platesArray:[],
            }
        },

        methods:{
            clearAll(){
                localStorage.clear()
                store.listplatelocalstorage = []                
            },                    
        },
        computed:{
            totalSubPrice() {
                let subtotal = 0;
                if (store.listplatelocalstorage.length > 0) {
                    store.listplatelocalstorage.forEach((plate)=>{
                        subtotal += +plate.price
                    })
                }
                store.subtotal_price = subtotal;
                return subtotal;
            }
        }
    }
</script>

<template>

    <!-- POI VA CREATA LA LOGICA CHE QUANDO CLICCHI SUL TASTO CHECKOUT VENGA "ASSEMBLATO" UN ARRAY CONTENETE I PIATTI + LE QUANTITA' -->

<!-- offcanvas -->
<div class="offcanvas canva offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
    <div class="offcanvas-body">
        <div v-if="store.listplatelocalstorage.length > 0">
            <h1 class="text-light mb-3">Riassunto Carrello</h1>
                <!-- card prodotto -->
                <div class="row row-gap-3">
                    <div class="col-12" v-for="(plate, index) in store.listplatelocalstorage" :key="plate.id">
                        <CartCard :plate="plate" />
                    </div>
                </div>
            
            <!-- card prezzo totale  -->
            <div class="bg-light rounded my-3 p-3">
                <div class="d-flex justify-content-between">
                    <span>Subtotale</span>
                    <span> {{ totalSubPrice }}<span class="ps-1">€</span></span>
                </div>
                <div class="d-flex justify-content-between">
                    <span>Consegna</span>
                    <span>Gratuita</span>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <span>Totale</span>
                    <span> {{ totalSubPrice }}<span class="ps-1">€</span></span>
                </div>
            </div>
    
            <!-- bottone checkout  -->
            <div class="d-grid">
                <button class="my-3 btn btn-lg bg-warning ">Checkout</button>
            </div>
            <!-- bottone remove all  -->
            <div class="d-grid" @click="clearAll()">
                <button class="my-3 btn btn-lg bg-danger ">Svuota Carrello</button>
            </div>
        </div>
        <div v-else>
            <h2 class="text-center text-white">Nessun piatto presente nel tuo carrello</h2>
        </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
    
</style>