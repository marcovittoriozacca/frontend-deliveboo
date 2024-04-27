<script>
export default {
    name: 'Plate',
    props:['plate'],
    data() {
        return {
            quant: 0,
        }
    },
    methods: {
        setDishetImage(dish_image){
            let image = '';
            switch (true) {
                case dish_image == null:
                    return  image = '/img/deliveboo-logo.png';
                case dish_image.includes('dish_images/'):
                return image =  `http://127.0.0.1:8000/storage/${dish_image}`;
            }
        },
        quantityUp(){
            this.quant++;
        },
        quantityDown(){
            if(this.quant <= 0){
                this.quant = 0
            }else{
                this.quant--
            }
        }
    },
}
</script>

<template>
    <div class="card-dark-bg text-white rounded-3 p-3">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <figure>
                        <img class="plate-img rounded" :src="setDishetImage(plate.image)" :alt="plate.name">
                    </figure>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column align-items-center">
                        <h2 class="mb-0 text-center mb-2">{{ plate.name }}</h2>
                        <span class="badge rounded-pill" :class="(plate.visible? 'text-bg-success' : 'text-bg-danger')">{{ (plate.visible)? 'Disponibile' : 'Non Disponibile' }}</span>
                    </div>
                </div>

                <div class="col-12">
                    <p class="my-2">{{ plate.description }}</p>
                </div>

                <div class="col-12">
                    <div class="d-flex align-items-center justify-content-around ">
                        <div class="split-pill">
                            <span class="left">{{ plate.price }}</span>
                            <span class="right">€</span>
                        </div>
                        <div class="bottoni d-flex mx-2  gap-2">
                            <button @click="quantityDown" class="btn border">-</button>
                            <span class="border rounded text-center bg-light text-dark pt-2">{{ quant }}</span>
                            <button @click="quantityUp"  class="btn border">+</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;

.card-dark-bg{
    background-color:$dark-navy-blue ;
}
.plate-img{
    width: 170px;
    aspect-ratio: 2/1;
    object-fit: cover;

    border: 2px solid $dark-yellow;
}
.bottoni{
    button,
    span{
        width: 35px;
        height: 35px;
    }
    button{
        background-color: $orange;
    }
}
.split-pill {
  border-radius: 9999px;
  padding: 5px;
  display: inline-flex;
  justify-content:space-evenly;
  background: linear-gradient(-90deg, #f58115 32%, black 35%, black 33%, #CED2D9 22%);
}

.left {
  padding-right: 5px;
  color: black;
}

.right {
  padding-left: 5px;
  color: black;
}
</style>