<script>
import { store } from '../../Store';
export default {
    name:'CartCard',
    props:['plate'],

    data() {
        return {
            store,
        }
    },
    methods: {
        setDishImage(dish_image){
            let image = '';
            switch (true) {
                case dish_image == null:
                    return  image = '/img/deliveboo-logo.png';
                case dish_image.includes('dish_images/'):
                return image =  `http://127.0.0.1:8000/storage/${dish_image}`;
            }
        },
        increment(plate){
            plate.quantity++;
            localStorage.setItem(`restaurant${plate.restaurant_id}`, JSON.stringify(store.listplatelocalstorage));
        },

        decrement(plate){
            if(plate.quantity <= 1){
                this.removeSinglePlate(plate)
            }else{
                plate.quantity--  
                localStorage.setItem(`restaurant${plate.restaurant_id}`, JSON.stringify(store.listplatelocalstorage));
            }
        },
        removeSinglePlate(plate){
            
                const indexToRemove = store.listplatelocalstorage.indexOf(plate);
    
                
                const temporaryArray = JSON.parse(localStorage.getItem(`restaurant${plate.restaurant_id}`))
    
                let storageIndexToRemove;
                temporaryArray.forEach((element,index) => {
                    if(element.id == plate.id){
                        storageIndexToRemove = index;
                    }
                });
                store.listplatelocalstorage.splice(indexToRemove, 1);
                temporaryArray.splice(storageIndexToRemove, 1);
    
                localStorage.setItem(`restaurant${plate.restaurant_id}`, JSON.stringify(temporaryArray));

                if(store.listplatelocalstorage.length === 0){
                    localStorage.clear();
                }
        },
    },
    
}
</script>

<template>
    <div class="d-flex bg-white rounded-2 p-3 align-items-start">
        <!-- bottoni quantità -->
        <div class="d-flex flex-column m-2 gap-2">
            <button class="btn border" @click="increment(plate)" >+</button>
            <span class="border rounded p-1 text-center">{{plate.quantity}}</span>
            <button class="btn border" @click="decrement(plate)">-</button>
        </div>
        <!-- immagine prodotto  -->
        <figure class="w-50  m-0 figure_cart">
            <img class="img-fluid" :src="setDishImage(plate.image)" alt="immagine">
        </figure>
        <!-- Nome prodotto  -->
        <div class="m-0 w-100 d-flex justify-content-between align-items-center px-2">
            <div class="d-flex flex-column">
                <h3>{{ plate.name }}</h3>
            </div>
            <!-- Prezzo prodotto -->
            <div class="d-flex flex-column ">
                <span class="text-end">{{ plate.price }}€</span>
                <button @click="removeSinglePlate(plate)" class="btn btn-danger text-capitalize">rimuovi</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>