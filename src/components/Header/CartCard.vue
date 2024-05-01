<script>
import CartSingleRemoveBtn from '../GeneralComponents/CartSingleRemoveBtn.vue';
import axios from 'axios';
import { store } from '../../Store';
export default {
    name:'CartCard',
    props:['plate'],
    components:{
        CartSingleRemoveBtn,
    },
    data() {
        return {
            store,
            debounceTimer: "",
        }
    },
    methods: {
        setDishImage(dish_image){
            let image = '';
            switch (true) {
                case dish_image == null:
                    return  image = '/img/deliveboo-logo.png';
                case dish_image.includes('dish_images/'):
                return image =  `http://127.0.0.1:8000/storage/${dish_image}`;
            }
        },
        increment(plate){
            
            // Annulla il timer debounce precedente se esiste
            clearTimeout(this.debounceTimer);

            console.log("Pulsante premuto");

            // Avvia il timer debounce
            this.debounceTimer = setTimeout(() => {
                console.log("Timer scaduto. Eseguo la richiesta Axios.");
                this.takerestaurant();
            }, 1000); //timer di debounce in ms
            plate.quantity++;
            localStorage.setItem(`restaurant${plate.restaurant_id}`, JSON.stringify(store.listplatelocalstorage));
        },

        decrement(plate){
            if(plate.quantity <= 1){
                plate.quantity = 1
            }else{
                plate.quantity--  
                localStorage.setItem(`restaurant${plate.restaurant_id}`, JSON.stringify(store.listplatelocalstorage));
            }
        },
        removeSinglePlate(plate){
            
                const indexToRemove = store.listplatelocalstorage.indexOf(plate);
    
                
                const temporaryArray = JSON.parse(localStorage.getItem(`restaurant${plate.restaurant_id}`))
    
                let storageIndexToRemove;
                temporaryArray.forEach((element,index) => {
                    if(element.id == plate.id){
                        storageIndexToRemove = index;
                    }
                });
                store.listplatelocalstorage.splice(indexToRemove, 1);
                temporaryArray.splice(storageIndexToRemove, 1);
    
                localStorage.setItem(`restaurant${plate.restaurant_id}`, JSON.stringify(temporaryArray));

                if(store.listplatelocalstorage.length === 0){
                    localStorage.clear();
                    store.actualrestaurant=""
                    store.full_name="";
                    store.email="";
                    store.address="";
                    store.tel="";
                    store.description="";
                }
        },
        takerestaurant(){
            let id="";
        this.ContolloRistorante=Object.keys(localStorage)
        this.ContolloRistorante.forEach(element => {
                if(element.includes("restaurant")){
                    console.log(element.substring(10))
                    return id=element.substring(10)
                }
            });
            
        axios.get(`http://127.0.0.1:8000/api/restaurantsid/${id}`).then((res)=>{
            store.actualrestaurant=res.data
        })
        }
    },
    mounted() {
        this.takerestaurant();

    },
    
}
</script>

<template>
    <div class="bg-white rounded-2 p-4">
        <div class="row">
            <!-- bottoni quantità -->
            <div class="col-2">
                <div class="d-flex flex-column row-gap-2 align-items-center">
                    <button class="btn text-dark orange-button" @click="increment(plate)">
                        <div class="d-flex align-items-center justify-content-center">
                            +
                        </div>
                    </button>
                    <span class="border rounded p-1 text-center">{{plate.quantity}}</span>
                    <button class="btn gray-btn border" @click="decrement(plate)">
                        <div class="d-flex align-items-center justify-content-center">
                            -
                        </div>
                    </button>
                    <!-- bottone rimozione del singolo prodotto -->
                    <CartSingleRemoveBtn
                    @click="removeSinglePlate(plate)"/>
                </div>
            </div>

            <div class="col-10">
                <div class="d-flex flex-column">
                    <!-- immagine prodotto  -->
                    <figure>
                        <img class="img-fluid rounded black-background" :src="setDishImage(plate.image)" alt="immagine">
                    </figure>                    
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">{{ plate.name }}</h3> 
                            </div>
                            <div class="col-4">
                                <span class="fw-bold bg-body-tertiary border rounded p-1">{{ plate.price }}<span class="orange-text"> €</span></span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/sass/partials/variables' as *;

    

    .orange-button{
        background-color: $orange;
    }
    .orange-text{
        color: $orange;
    }
    .black-background{
        background-color: #15182d;
    }

    figure{
        width: 100%;
        aspect-ratio: 2/1;
        
        img{
            width: 100%;
            height: 100%;
            aspect-ratio: 2/1;
            object-fit: cover;
        }
    }

    button.orange-button{
        &:hover{
            background-color: #ff6600;
        }
        &:focus{
            border: 1px solid #ff6600;
        }
    }
    button.gray-btn{
        &:hover{
            background-color: #e2e2e2;
        }
        
        
    }



    
</style>