<script>
import {store} from '../Store';
import axios from 'axios';
export default{
    name: "Restaurant",
    data(){
        return{
            // store,
        }
    },
    methods:{
        restaurants(){
        axios.get('http://127.0.0.1:8000/api/restaurants')
        .then(res=>{
            this.restaurant=res.data,
            console.log(this.restaurant)
        })
        .catch(error => {
            console.error('Errore durante la richiesta API:', error);
        });
}
    },
}
</script>

<template>
    <!-- componente ristoranti -->
    <div class="resturant_container p-5">
        <div class="container d-flex justify-content-center gap-3">
            <figure>
                <img class="restaurant-image" src="../assets/img/deliveboo-logo.png" alt="img-ristorante">
            </figure>
            <div class="">
                <h2>titolo ristorante</h2>
                <span>categoria</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo mollitia dicta, nostrum fugiat natus praesentium facilis sed aliquid distinctio maiores voluptatum eaque error illum inventore eius, quisquam autem assumenda ipsa.
                </p>
                <span>indirizzo</span>
            </div>
        </div>
        <hr>
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
</style>
