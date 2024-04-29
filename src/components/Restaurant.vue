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
}
</script>

<template>
<!-- componente ristoranti -->
    <div>
        <router-link :to="{name:'Single-Restaurant',params:{slug:restaurant.slug}}">
            <div class="contenitore text-dark p-2">
                <div class="row justify-content-center justify-content-md-start">
                    <div class="col-9 col-md-4 col-lg-3">
                        <figure class="m-0 position-relative">

                            <img v-if="restaurant.image" class="restaurant-bg rounded-4" :src="`http://127.0.0.1:8000/storage/${restaurant.image}`" alt="img-ristorante">
                            <img v-else class="restaurant-bg rounded-4" src="https://codyhouse.co/demo/squeezebox-portfolio-template/img/img.png" alt="image-missing">

                            <!-- invisibile da in poi -->
                            <div class="w-100 p-3 position-absolute text-center top-50 start-50 translate-middle opacity-black-bg d-flex flex-column row-gap-2 d-md-none">
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
                    <div class="col-8 d-none d-md-block p-4 ms-3">
                        <div class="d-flex flex-column row-gap-2">
                            <h2 class="mb-0 text-dark">{{ restaurant.activity_name  }}</h2>
                            <span>{{ restaurant.address }} <i class="fa-solid fa-location-dot" style="color:#002452;" st></i></span>
                            <div class="d-flex column-gap-2">
                                <span class="black-bg badge rounded-pill mb-0" v-for="(types, index) in restaurant.types" :key="index">
                                {{  types.slug }}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        
        </router-link>
        
    </div>



</template>

<style scoped lang="scss">

@use '../assets/sass/partials/variables' as *;

.contenitore{
    -webkit-box-shadow: 5px 5px 10px 0px #525252;
    -moz-box-shadow: 5px 5px 10px 0px #525252;
    -o-box-shadow: 5px 5px 10px 0px #525252;
    box-shadow: 5px 5px 10px 0px #525252;

    background-color: whitesmoke;
    border-radius: 20px;
    .opacity-black-bg{
        background-color: rgba(0, 0, 0, 0.7);
    }
    .orange-bg{
        background-color: $orange;
    }
    .black-bg{
        background-color: $orange;
        padding: 5px;
    }
   .restaurant-bg{
    width: 100%;
    height: 100%;
   }

   transition: all 0.5s ease;
   overflow: hidden;
   margin-left: -1%;
}

.contenitore:hover{
    width: 102%;
    // transition: all 0.8s ease-in-out;
    margin-left: 0%;
}
</style>
