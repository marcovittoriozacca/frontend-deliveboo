<script>
import axios from 'axios';
import { store } from '../Store';
export default{
    name: "Restaurant",

    props:['restaurant'],
    
    data(){
        return{
            store,
        };
    },
    methods: {
        setRestaurantImage(restaurant_image){
            let image = '';
            switch (true) {
                case restaurant_image == undefined:
                    return  image = 'https://codyhouse.co/demo/squeezebox-portfolio-template/img/img.png';
                case restaurant_image.includes('https://'):
                    return image = restaurant_image;
                case restaurant_image.includes('restaurant_images/'):
                    return image =  `http://127.0.0.1:8000/storage/${restaurant_image}`;
            }
        },
    },


}
</script>

<template>
<!-- componente ristoranti -->
            <div class="col contenitore p-3 scale-anim">
            <router-link :to="{name:'Single-Restaurant',params:{slug:restaurant.slug}}">
                    <div class="justify-content-center justify-content-md-start bg-white rounded">
                        {{ console.log(restaurant.image) }}
                        <!-- immagina card  -->
                        <figure class="m-0 position-relative">
                            <img class="img-fluid rounded-4 mb-3" :src="setRestaurantImage(restaurant.image)" :alt="restaurant.activity_name">
                        </figure>
                        <!-- testo card  -->
                        <div class="d-flex flex-column row-gap-2 text-dark">
                            <h2 class="mb-0">{{ restaurant.activity_name  }}</h2>
                            <span>{{ restaurant.address }} <i class="fa-solid fa-location-dot" style="color:#002452;"></i></span>
                            <div class="d-flex column-gap-2">
                                <span class="cetegoty-pill badge rounded-pill mb-0" v-for="(types, index) in restaurant.types" :key="index">
                                {{  types.slug }}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </router-link>
            </div>
</template>

<style scoped lang="scss">

@use '../assets/sass/partials/variables' as *;

.contenitore{
    // ombra della card 
    -webkit-box-shadow: 5px 5px 10px 0px #525252;
    -moz-box-shadow: 5px 5px 10px 0px #525252;
    -o-box-shadow: 5px 5px 10px 0px #525252;
    box-shadow: 5px 5px 10px 0px #525252;

    // altezza card 
    height: 100%;

    background-color: white;
    background-image: url('src/assets/img/card_restaurant-bg.jpg'); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    padding: 20px;
    border-radius: 20px;

    .opacity-black-bg{
        background-color: rgba(0, 0, 0, 0.7);
    }
    .cetegoty-pill{
        background-color: $orange;
        padding: 5px;
    }

    
}
.scale-anim{
    transition: all .3s ease-out;
    &:hover{
        transform: scale(103%);
    }
}
</style>
