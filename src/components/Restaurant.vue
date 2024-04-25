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
            maxrestaurant:0,
        };
    },


    methods: {
        getRestaurants(){
            axios.get('http://127.0.0.1:8000/api/restaurants').then(res=>{
                this.restaurants=res.data.restaurant;
                this.maxrestaurant=this.restaurants.length-1
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
        <router-link :to="{name:'Single-Restaurant',params:{slug:restaurant.id}}">
            <div class="d-flex flex-column contenitore text-light" v-if="arraysContainSameElement(store.active_typologies, restaurant.types) || store.active_typologies.length <= 0">
                <div class="d-flex gap-4">
                    <figure class="m-0">
                        <img v-if="restaurant.image" width="150" class="restaurant-image rounded-4" :src="`http://127.0.0.1:8000/storage/${restaurant.image}`" alt="img-ristorante">
                        <img v-else src="" alt="image-missing">
                    </figure>
                    <div class="">
                        <h2>{{ restaurant.activity_name  }}</h2>
                        <span>{{ restaurant.address }}</span>
                        <div class="d-flex gap-3">
                            <p class="badge rounded-pill" v-for="(types, index) in restaurant.types" :key="index">
                            {{  types.slug }}
                            </p>
                        
                        </div>
                    </div>
                </div>
                <hr :class="{'d-none': index==maxrestaurant}">
            </div>
        </router-link>
        
    </div>



</template>

<style scoped lang="scss">





.contenitore{
    width: 100%;
    figure{
        width: 300px; 
        height: 200px;
            .restaurant-image{
                width: 100%; 
                height: 100%;
            }
    }

    div{
        .rounded-pill{
            background-color: black!important;;
        }
    } 

    hr{
    border: 1px solid black;
    opacity: 1;
   }

  

   

    
}





</style>
