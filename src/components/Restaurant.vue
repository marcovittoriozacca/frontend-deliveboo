<script>
import axios from 'axios';
export default{
    name: "Restaurant",

    data(){
        return{
            restaurant:[],
        };
    },


    methods: {
        restaurants(){
            axios.get('http://127.0.0.1:8000/api/restaurants').then(res=>{
                this.restaurant=res.data.restaurant;
                console.log(this.restaurant);
            })
            .catch(error => {
              console.error('Errore durante la richiesta API:', error);
            });
        }
    },
    mounted() {
        this.restaurants();
    }
}
</script>

<template>
    <!-- componente ristoranti -->
    <div class="resturant_container p-5">
        <div 
        class="container d-flex justify-content-start align-items-center gap-3 mt-3"
        v-for="(element, index ) in restaurant" :key="index">
            <figure>
                <img class="restaurant-image" :src="element.image" alt="img-ristorante">
            </figure>
            <div class="">
                <h2>{{ element.activity_name  }}</h2>
                <span>{{ element.address }}</span>
            </div>
            <hr>
        </div>
    </div>
</template>

<style scoped lang="scss">
.resturant_container{
    background-color:#ff9654;
}
.restaurant-image{
    width: 300px; 
    height: auto;
}
hr{
    background-color: black;
}
</style>
