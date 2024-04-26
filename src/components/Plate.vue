<script>
export default {
    name: 'Plate',
    props:['plate'],
    data() {
        return {
            
        }
    },
}
</script>

<template>
    <div class="card-deck d-grid gap-3">
        <div class="card p-3" style="width: 18rem;">
            <!-- card img  -->
            <img :src="plate.image" class="card-img-top" alt="...">
            <div class="card-body">
                <!-- card body  -->
                <h4 class="card-title">{{ plate.name }}</h4>
                <p class="card-text">{{ plate.description }}</p>
                <p class="card-text">{{ plate.ingredient }}</p>
                <div class="d-flex justify-content-between align-items-end gap-4">
                    <!-- sezione categorie e ingredienti  -->
                    <div class="d-flex flex-column">
                        <span>{{ plate.category.name }}</span>
                        <span>{{ (plate.visible)? 'Disponibile' : 'Non Disponibile' }}</span>
                        <!-- pillola prezzo  -->
                        <div class="split-pill">
                            <span class="left">{{ plate.price }}</span>
                            <span class="right">€</span>
                        </div>
                    </div>
                    <!-- sezione aggiungi piatto  -->
                    <div class="bottoni d-flex mx-2  gap-2">
                        <button class="btn border">+</button>
                        <span class="border rounded text-center bg-light text-dark pt-2">01</span>
                        <button class="btn border">-</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;

.card{
    background-color:$dark-navy-blue ;
    color: white;
}
.card-deck{
   align-items: stretch;
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
  margin-top: 10px;
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