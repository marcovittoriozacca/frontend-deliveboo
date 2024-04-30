<script>
import axios from 'axios';
import {store} from '../Store';
import Plate from '../components/Plate.vue';
import { handleError } from 'vue';

export default {
        name: "SingleRestaurant",
        components:{
            Plate,
        },
        data(){
            return{
                store,
                plates: [],
                restaurant: [],
                arrayString:"",
                ArrayPrimi: [],
                ArraySecondi: [],
                ArrayDessert: [],
                ArrayBevande: [],
                
            }
        },
        methods:{
            clearAll(){
                localStorage.clear()
                store.listplatelocalstorage = []                
            },   
            

            getPlates(){
                axios.get(`http://127.0.0.1:8000/api/restaurant/${this.$route.params.slug}`).then((res)=> { 
                    this.plates = res.data.dishes.filter(plate => plate.visible)
                    this.restaurant = res.data.restaurant
                    this.dishSorterer();
                } )
            },

            


            dishSorterer(){
                this.plates.forEach(plate => {
                    if(plate.category_id == 1){
                        this.ArrayPrimi.push(plate);
                    } else if(plate.category_id == 2){
                        this.ArraySecondi.push(plate);
                    } else if(plate.category_id == 3){
                        this.ArrayDessert.push(plate);
                    } else if(plate.category_id == 4){
                        this.ArrayBevande.push(plate);
                    }
                });
            },


            setRestaurantImage(restaurant_image){
                let image = '';
                switch (true) {
                    case restaurant_image == undefined:
                      return  image = '/img/deliveboo-logo.png';
                    case restaurant_image.includes('restaurant_images/'):
                    return image =  `http://127.0.0.1:8000/storage/${restaurant_image}`;
                }
            },},

        watch: {
            'store.alertbox':{
                handler(newVal, oldVal) {
      if (newVal) {
        document.getElementById('alertbox').innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show position-fixed w-100 z-2 d-flex justify-content-center py-1" role="alert" >
                <strong class="align-self-center">Non puoi ordinare da due ristoranti contemporaneamente.</strong> 
                <div class="text-center ps-3">
                    <button id="clearCartBtn" class="my-3 btn btn-sm text-white bg-danger" data-bs-dismiss="alert">Svuota Carrello</button>
                </div>
                <button id="closeAlert" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        document.getElementById('clearCartBtn').addEventListener('click', this.clearAll);
        
        document.getElementById('closeAlert').addEventListener('click',()=>{
            this.store.alertbox=false
        })
      }
    },
    immediate:true
            }
        },
        
        mounted(){
            this.getPlates();
            
        },

        beforeUnmount() {
            this.store.alertbox=false;
        },
    }
</script>

<template>
    <div id="alertbox"></div>
    <div class="main-bg-color">
        <!-- top restaurant banner -->
        <div class="bg-restaurant-template">
            <div class="container h-100">
                <div class="row justify-content-center align-items-end h-100">
                    <div class="col-12">
                        <div class="translate-middle-min-y">
                            <div class="restaurant-banner-info p-4 rounded-3 text-center position-relative">
                                <figure class="position-absolute restaurant-figure-position">
                                    <img class="border-image rounded-3" :class="(!restaurant.image? 'restaurant-image-template' : 'restaurant-image' )" :src="setRestaurantImage(restaurant.image)" alt="restaurant-image">
                                </figure>                                
                                <div class="mt-5">
                                    <h1>{{ restaurant.activity_name }}</h1>
                                    <p>{{ restaurant.address }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     <!-- <img src="../assets/img/add-to-cart.png" alt="add-to-cart" class="add-to-cart"> -->
        <div class="container pb-5 custom-top-padding">
            <!-- Primi piatti -->
            <div v-if="this.ArrayPrimi.length > 0" class="mb-4">
                <h2>Primi</h2>
                <div class="container">
                    <div class="row row-gap-3">
                        <div class="col-12 col-md-6 col-lg-4" v-for="(plate, index) in this.ArrayPrimi" :key="plate.id">
                            <Plate :restaurant = restaurant  :plate = plate />
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Secondi piatti -->
            <div v-if="this.ArraySecondi.length > 0" class="mb-4">
                <h2>Secondi</h2>
                <div class="container">
                    <div class="row row-gap-3 ">
                        <div class="col-12 col-md-6 col-lg-4" v-for="(plate, index) in this.ArraySecondi" :key="plate.id">
                            <Plate :restaurant = restaurant :plate = plate />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Dessert -->
            <div v-if="this.ArrayDessert.length > 0" class="mb-4">
                <h2>Dessert</h2>
                <div class="container">
                    <div class="row row-gap-3">
                        <div class="col-12 col-md-6 col-lg-4" v-for="(plate, index) in this.ArrayDessert" :key="plate.id">
                            <Plate :restaurant = restaurant :plate = plate />
                        </div>
                    </div>
                </div>
            </div>
            <!-- bevande -->
            <div v-if="this.ArrayBevande.length > 0">
                <h2>Bevande</h2>
                <div class="container">
                    <div class="row row-gap-3">
                        <div class="col-12 col-md-6 col-lg-4" v-for="(plate, index) in this.ArrayBevande" :key="plate.id">
                            <Plate :restaurant = restaurant :plate = plate />
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
    h2{
        color: white;
    }
    .bg-restaurant-template{
        background-image: url('/img/template-img.png');
        height: 200px;
        background-size: 140px;
    }
    .translate-middle-min-y{
        transform: translateY(40%)
    }
    .custom-top-padding{
        padding-top: 6em;
    }

    .restaurant-banner-info{
        background-color: #03071e;
        color: white;
        h1{
            color: $dark-yellow;
        }
        p{
            color: $orange;
        }
    }
    .restaurant-image{
        width: 200px;
        height: 130px;
        
        object-fit: cover;
        object-position: center
    }
    .restaurant-image-template{
        width: 200px;
        height: 130px;
        
        object-fit: contain;
        background-color:black;
    }

    .restaurant-figure-position{
        top: 0;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .border-image{
        border: 5px solid #e47400;
        box-shadow: 0px 10px 50px 25px #e4760036;
    }

    .main-bg-color{
        background-color: $peacoat;
    }

</style>