<script>
import {store} from "../Store"
    export default {
        name:"Cart",
    
        data() {
            return {
                store,
                quantity:1,
                idrestaurant:"",
                exactlocalkey:"",
                arraypiattiristorante:[]
            }
        },

        methods:{

            decrement(){
                if(this.quantity<=1){
                    console.log(store.listplatelocalstorage,"a")
                    return this.quantity=1
                }
                this.quantity--
                
            },
            a(){
                console.log(store.listplatelocalstorage.length)
            }
            

        },
        created(){
            
           
        }
    }
</script>

<template>

    <!-- VA CREATO UN COMPONENTE CHE CICLI LA CARTA IN BASE A QUANTI PIATTI SONO PRESENTI NELLA VARIABILE store.listplatelocalstorage -->
    <!-- LOGICA DI RIMOZIONE SINGOLO PIATTO DAL LOCAL STORAGE -->
    <!-- POI VA CREATA LA LOGICA CHE QUANDO CLICCHI SUL TASTO CHECKOUT VENGA "ASSEMBLATO" UN ARRAY CONTENETE I PIATTI + LE QUANTITA' -->

<!-- offcanvas -->
<div class="offcanvas canva offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" >
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
    <div class="offcanvas-body">
    <h1 class="text-light mb-3">Riassunto Carrello</h1>
        <!-- card prodotto -->
        <div class="d-flex bg-white rounded-2 p-3 align-items-start" @click="a()" v-if="store.listplatelocalstorage.length > 0">
            <!-- bottoni quantità -->
            <div class="d-flex flex-column m-2 gap-2">
                <button class="btn border" @click="quantity++" >+</button>
                <span class="border rounded p-1 text-center">{{quantity}}</span>
                <button class="btn border" @click="decrement()">-</button>
            </div>
            <!-- immagine prodotto  -->
            <figure class="w-50  m-0 figure_cart">
                <img class="img-fluid" src="" alt="immagine">
            </figure>
            <!-- descrizione prodotto  -->
            <div class="m-0 w-100 d-flex justify-content-between align-items-center px-2">
                <div class="d-flex flex-column">
                    <h3>nomepiatto</h3>
                    <p>Descrizione</p>
                </div>
                <div class="d-flex flex-column ">
                    <span class="text-end">23€</span>
                    <button class="btn p-0 p-lg-1 bg-danger">rimuovi</button>
                </div>
            </div>
        </div>
        <div v-else>Non hai ancora aggiunto piatti al carrello</div>

        <!-- card prezzo totale  -->
        <div class="bg-light rounded my-3 p-3">
            <div class="d-flex justify-content-between">
                <span>Subtotale</span>
                <span>€</span>
            </div>
            <div class="d-flex justify-content-between">
                <span>Consegna</span>
                <span>€</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
                <span>Prezzo totale</span>
                <span>€</span>
            </div>
        </div>

        <!-- bottone checkout  -->
        <div class="d-grid">
            <button class="my-3 btn btn-lg bg-warning ">Checkout</button>
        </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
    
</style>