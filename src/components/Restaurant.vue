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
            hrCount: 0
        };
    },


    methods: {

        countHrTags() {
            this.hrCount = document.querySelectorAll('hr').length;
            if(this.hrCount > 0){
                document.getElementsByTagName('hr')[this.hrCount-1].style.display="none"
            }
        },

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
        },        
    },
    mounted() {
        this.getRestaurants();
        this.countHrTags();
        // Osserva le modifiche nel DOM
        const observer = new MutationObserver(() => {
            this.countHrTags();
        });
        observer.observe(document.body, { subtree: true, childList: true });        
    }
}
</script>

<template>
<!-- componente ristoranti -->
    <div 
        v-for="(restaurant, index ) in restaurants" :key="restaurant.id">
        <router-link :to="{name:'Single-Restaurant',params:{slug:restaurant.slug}}">
            <div class="contenitore text-light" v-if="arraysContainSameElement(store.active_typologies, restaurant.types) || store.active_typologies.length <= 0" >
                <div class="row justify-content-center justify-content-md-start">
                    <div class="col-9 col-md-4 col-lg-3">
                        <figure class="m-0 position-relative">

                            <img v-if="restaurant.image" class="restaurant-bg rounded-4" :src="`http://127.0.0.1:8000/storage/${restaurant.image}`" alt="img-ristorante">
                            <img v-else class="restaurant-bg rounded-4" src="https://codyhouse.co/demo/squeezebox-portfolio-template/img/img.png" alt="image-missing">

                            <!-- invisibile da in poi -->
                            <div class="w-100 px-1 position-absolute text-center top-50 start-50 translate-middle py-4 opacity-black-bg d-flex flex-column row-gap-2 d-md-none">
                                <h2 class="mb-0">{{ restaurant.activity_name  }}</h2>
                                <span>{{ restaurant.address }}</span>
                                <div>
                                    <span class="orange-bg badge rounded-pill ms-2 text-capitalize" v-for="(types, index) in restaurant.types" :key="index">
                                    {{  types.slug }}
                                    </span>
                                </div>
                            </div>

                        </figure>
                    </div>

                    <!-- invisibile da in poi -->
                    <div class="col-8 d-none d-md-block">
                        <div class="d-flex flex-column row-gap-2">
                            <h2 class="mb-0 text-dark">{{ restaurant.activity_name  }}</h2>
                            <span>{{ restaurant.address }}</span>
                            <div class="d-flex column-gap-2">
                                <span class="black-bg badge rounded-pill mb-0" v-for="(types, index) in restaurant.types" :key="index">
                                {{  types.slug }}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <hr> 
            </div>
        
        </router-link>
        
    </div>



</template>

<style scoped lang="scss">

@use '../assets/sass/partials/variables' as *;

.contenitore{
    .opacity-black-bg{
        background-color: rgba(0, 0, 0, 0.7);
    }
    .orange-bg{
        background-color: $orange;
    }
    .black-bg{
        background-color: rgba(0, 0, 0, 1);
    }
    hr{
        border: 1px solid black;
        opacity: 1;    
    }
   .restaurant-bg{
    width: 100%;
    height: 100%;
   }
}
</style>
