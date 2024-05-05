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
                store.actualrestaurant=""   
                store.full_name="";
                store.email="";
                store.address="";
                store.tel="";
                store.description="";          
            },                    
        },
        computed:{
            totalSubPrice() {
                let subtotal = 0;
                if (store.listplatelocalstorage.length > 0) {
                    store.listplatelocalstorage.forEach((element)=>{
                        if(!element.activity_name){
                        subtotal += +element.price * element.quantity
                        }
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
    <!-- Intestazione dell'offcanvas -->
    <div class="offcanvas-header">
        <div class="d-flex flex-column">
        
            <h1 class="text-light mb-0">Carrello</h1>
            <h2 class="text-light mb-0">{{store.actualrestaurant.restaurant?.activity_name}}</h2>
        </div>
        <button type="button" class="btn-close me-4 mt-1 h3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <!-- corpo offcanvas, deve andare in overflow-y scroll -->
    <div class="offcanvas-body pt-0">
        
        <!-- <h1 class="text-white">{{ store.actualrestaurant.restaurant.activity_name }}</h1> -->
        
        <div v-if="store.listplatelocalstorage.length > 0" class="overflow-offcanvas-body">
            <!-- card prodotto -->
            <div class="row row-gap-3 m-0">
                <div class="col-12 p-0" v-for="(plate, index) in store.listplatelocalstorage" :key="plate.id">
                    <CartCard :plate="plate" v-if="!plate.activity_name"/>
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
                <router-link :to="{name:'checkout'}">
                    <button class="w-100 mb-3 btn btn-lg bg-warning fw-bolder" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">Checkout</button>
                </router-link>
            </div>

            <!-- Modale rimozione tutti i piatti -->
            <button
                type="button"
                class="btn btn-danger btn-lg w-100 fw-bolder"
                id="bt_clear"
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
                <h5 class="modal-title text-center fw-bolder " id="modalTitleId">
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
                    <button class="my-3 btn btn-lg text-white bg-danger bt_clear" data-bs-dismiss="modal">Svuota Carrello</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.overflow-offcanvas-body{
    height: calc(100vh - 415px);
    overflow-y: scroll;

}
.d-grid{
    button{
        &:hover{
            background-color: #e2ab06!important;
            color: black;
            scale: 102%;
        }
    }
}

#bt_clear{
    &:hover{

        background-color: #a5222f;
        scale: 102%;
    }
}
.offcanvas-header{
    align-items: initial;
    button{
        &:hover{
            
            scale: 110%;
        }
       

    }
}

</style>