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
                    store.listplatelocalstorage.forEach((element)=>{
                        subtotal += +element.price * element.quantity
                    })
                }
                store.subtotal_price = subtotal;
                return subtotal.toFixed(2);
            }
        }
    }
</script>

<template>
<!-- offcanvas -->
<div class="offcanvas canva offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
        <div class="offcanvas-header">
            <h1 class="text-light mb-0">Riassunto Carrello</h1>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
    <div class="offcanvas-body">
        <div class="overflow-offcanvas-body" v-if="store.listplatelocalstorage.length > 0">
                <!-- card prodotto -->
                <div class="row row-gap-3">
                    <div class="col-12" v-for="(plate, index) in store.listplatelocalstorage" :key="plate.id">
                        <CartCard :plate="plate" />
                    </div>
                </div>
        </div>
        <div v-else>
            <h2 class="text-center text-white">Nessun piatto presente nel tuo carrello</h2>
        </div>
        <div v-if="store.listplatelocalstorage.length > 0">
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

            <!-- Modale rimozione tutti i piatti -->
            <button
                type="button"
                class="btn btn-danger btn-lg w-100"
                data-bs-toggle="modal"
                data-bs-target="#modalId"
            >
                Svuota Carrello
            </button>
        </div>
    </div>
</div>

<div
    class="modal fade"
    id="modalId"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    
    role="dialog"
    aria-labelledby="modalTitleId"
    aria-hidden="true"
>
    <div
        class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
        role="document"
    >
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-center" id="modalTitleId">
                    Sei sicuro di voler rimuovere tutti i piatti dal tuo carrello?
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-footer">
                <div class="text-center w-100" @click="clearAll()">
                    <button class="my-3 btn btn-lg text-white bg-danger" data-bs-dismiss="modal">Svuota Carrello</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.overflow-offcanvas-body{
    max-height: 380px;
    overflow: auto;

}
</style>