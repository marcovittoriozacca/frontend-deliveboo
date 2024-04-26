<script>
import axios from 'axios';
import {store} from '../Store';
import Plate from '../components/Plate.vue';
import Cart from '../components/Cart.vue'

export default {
        name: "SingleRestaurant",
        components:{
            Plate,
            Cart,
        },
        data(){
            return{
                store,
                plates: [],
                restaurant: [],
                
            }
        },
        methods:{
            getPlates(){
                axios.get(`http://127.0.0.1:8000/api/restaurant/${this.$route.params.slug}`).then((res)=> { 
                    this.plates = res.data.dishes
                    this.restaurant = res.data.restaurant
                } )
            },
        },
        mounted(){
            this.getPlates();
        },
    }
</script>

<template>
<div class="container">
    <div class="text-center py-3">
        <h1>{{ restaurant.activity_name }}</h1>
        <p>{{ restaurant.address }}</p>
        <p>{{ restaurant.piva }}</p>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="(plate, index) in plates" :key="plate.id">
            <div class="my-3">
                <Plate
                :plate = plate
                />
            </div>
        </div>
    </div>
</div>

<Cart/>

</template>


<style lang="scss" scoped>
    
</style>