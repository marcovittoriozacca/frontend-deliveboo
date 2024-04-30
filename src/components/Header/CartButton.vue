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
   
<button class="bt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="check()">

    <i class="fa-solid fa-cart-shopping d-flex align-items-center" style="color: #f58115;">
    
        
            <span v-if="store.listplatelocalstorage.length > 0 "  class="bg-white rounded-circle  custom-font-size">{{ store.listplatelocalstorage.length }}</span>
        
    </i>

</button>




</template>




<style lang="scss" scoped>
    
    button{
      background-color:transparent;
      border: none;
    }

    .custom-font-size{
        font-size: .7rem;
    }

    span{
        padding: 2px 5px;
    }


</style>