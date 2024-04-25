<script>
import axios from 'axios';
import { store } from '../Store';
export default{
    name: "Restaurant",
    props:['activeTypologies'],
    data(){
        return{
            restaurants:[],
            store,
        };
    },


    methods: {
        getRestaurants(){
            axios.get('http://127.0.0.1:8000/api/restaurants').then(res=>{
                this.restaurants=res.data.restaurant;
            })
            .catch(error => {
              console.error('Errore durante la richiesta API:', error);
            });
        },
        arraysContainSameElement(array1, array2) {
            const toArray = []; 
            array2.forEach((element,index) => {
                toArray.push(element.slug);
            });
            for (let i = 0; i < array1.length; i++) {
                for (let j = 0; j < toArray.length; j++) {
                    if (array1[i] === toArray[j]) {
                        return true;
                    }
                }
            }
            return false;
        }
    },
    mounted() {
        this.getRestaurants();
    }
}
</script>

<template>
<!-- componente ristoranti -->
    <div 
        v-for="(restaurant, index ) in restaurants" :key="restaurant.id">
        <div v-if="arraysContainSameElement(store.active_typologies, restaurant.types) || store.active_typologies.length <= 0">
            <figure>
                <img v-if="restaurant.image" width="150" class="restaurant-image" :src="`http://127.0.0.1:8000/storage/${restaurant.image}`" alt="img-ristorante">
                <img v-else src="" alt="image-missing">
            </figure>
            <div class="">
                <h2>{{ restaurant.activity_name  }}</h2>
                <span>{{ restaurant.address }}</span>
                <p v-for="(types, index) in restaurant.types" :key="index">
                {{  types.slug }}
                </p>
            </div>
            <hr>
        </div>
    </div>



</template>

<style scoped lang="scss">

.restaurant-image{
    width: 300px; 
    aspect-ratio: 1;
}
hr{
    background-color: black;
}
</style>
