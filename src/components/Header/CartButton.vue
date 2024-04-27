<script>
import {store} from '../../Store';
    export default {
        name: "CartButton",
        data() {
            return {
                store,
                 

            }
        },
        methods: {
            check(){
                console.log(store.listplatelocalstorage)
            }
        },
       
    }
</script>




<template>
   
<button class="bt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="check()"><i class="fa-solid fa-cart-shopping" style="color: #f58115;"></i></button>




</template>




<style lang="scss" scoped>
    
    button{
      background-color:transparent;
      border: none;
    }



</style>