<script>
import {store} from '../../Store';
    export default {
        name: "Cart",
        data() {
            return {
                store,
                checkkey:null,  

            }
        },
        methods: {
            checklocal(){
                this.checkkey=Object.keys(localStorage),
                
                this.checkkey.forEach(element => {
                    if(element.includes("restaurant")){
                        //se è presente una chiave che contiene la parola restaurant e non corrisponde con la chiave del ristorante attuale 
                        store.listplate = JSON.parse(localStorage.getItem(element)) 
                    }
                });

                console.log(store.listplate)



            
            }
        }
    }
</script>




<template>
   
<button class="bt" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="checklocal()"><i class="fa-solid fa-cart-shopping" style="color: #f58115;"></i></button>




</template>




<style lang="scss" scoped>
    
    button{
      background-color:transparent;
      border: none;
    }



</style>