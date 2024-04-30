<script>
import {store} from '../Store';
import AddToCartBtn from './GeneralComponents/AddToCartBtn.vue';
export default {
    name: 'Plate',
    props:['plate','restaurant'],
    components:{
        AddToCartBtn,
    },
    data() {
        return {
            store,
            ContolloRistorante:[],
            
            storedArray:"",
            parsedArray:[],
            controllo:false,
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
        handleImageError(event) {
            event.target.src = '/img/deliveboo-logo.png'; // Immagine di fallback nel caso in cui l'immagine fornita dalla funzione setDishImage(dish_image) restituisca qualche tipo di problema e venga visualizzato l'alt=""
        },
        addplate(plate){
            this.parsedArray = []
            // controllo se esiste la chiave nel local storage, se non c e pusho il piatto
            this.ContolloRistorante=Object.keys(localStorage)
            store.Sospeso = false
            this.ContolloRistorante.forEach(element => {
                if(element.includes("restaurant") && (element != "restaurant"+this.restaurant.id)){
                    //se è presente una chiave che contiene la parola restaurant e non corrisponde con la chiave del ristorante attuale 
                store.Sospeso = true
                }
            });

            

            if(localStorage.getItem("restaurant"+this.restaurant.id) == null && store.Sospeso!=true){
                // se non esistono chiavi con lo stesso id del ristoratne attuale e non ci sono ordini in sospeso posso aggiungere il piatto
                plate.quantity = 1;
                this.parsedArray.push(plate)
                this.arrayString=JSON.stringify(this.parsedArray)
                localStorage.setItem("restaurant" + this.restaurant.id, this.arrayString);
                store.listplatelocalstorage = JSON.parse(localStorage.getItem("restaurant" + this.restaurant.id));

                
            }else{
                if(store.Sospeso==false){

                    // se gia esiste un ristorante devo controllare se è gia incluso il piatto

                    this.storedArray = localStorage.getItem("restaurant" + this.restaurant.id)
                    this.parsedArray = JSON.parse(this.storedArray)

                    this.controllo=false

                    // ciclo che controlla i singoli id in local con l id del piatto cliccato

                    this.parsedArray.forEach(element => {
                        
                        if(element.id == plate.id){
                            this.controllo=true
                        }
                    });
                    
                    // se la variabile controllo è true allora quel piatto è gia presente, quindi lo rimuoviamo

                    if(!this.controllo){
                        plate.quantity = 1;
                        this.parsedArray.push(plate)
                        this.arrayString=JSON.stringify(this.parsedArray)
                        localStorage.setItem("restaurant" + this.restaurant.id, this.arrayString) 
                        store.listplatelocalstorage = JSON.parse(localStorage.getItem("restaurant" + this.restaurant.id))

                    }else{
                        console.log('evento 2')
                        // Trova l'indice dell'elemento nell'array principale basato sull'ID del piatto
                        const indexToRemove = store.listplatelocalstorage.findIndex(item => item.id === plate.id);
                        const temporaryArray = JSON.parse(localStorage.getItem(`restaurant${plate.restaurant_id}`));
                        let storageIndexToRemove;

                        // Trova l'indice dell'elemento nell'array temporaneo basato sull'ID del piatto
                        temporaryArray.forEach((element, index) => {
                            if (element.id === plate.id) {
                                storageIndexToRemove = index;
                            }
                        });

                        // Rimuovi l'elemento dalle due liste
                        if (indexToRemove !== -1 && storageIndexToRemove !== -1) {
                            store.listplatelocalstorage.splice(indexToRemove, 1);
                            temporaryArray.splice(storageIndexToRemove, 1);
                            if(temporaryArray.length == 0){
                                localStorage.clear();
                            }else{
                                // Aggiorna il local storage
                                localStorage.setItem(`restaurant${plate.restaurant_id}`, JSON.stringify(temporaryArray));
                            }
                        } else {
                            console.log("Errore: Impossibile trovare l'elemento da rimuovere.");
                        }
                    }
                }else{
                    console.log("hai gia un ordine in sospeso")
                    store.alertbox=true
                }
            }

   
        },
        isInCart(plate){
            return store.listplatelocalstorage.some(element => element.id === plate.id)? true : false 
        }
    },
}
</script>

<template>
    <div :class="plate.visible==0 ? 'opacity-50 pe-none user-select-none' : '' " class="card-dark-bg text-white rounded-3 p-3 h-100" >
        <div class="container h-100">
            <div class="row flex-column row-gap-1 h-100">
                <div class="col-12 p-0">
                    <figure class="position-relative mb-0 px-0">
                        <img class="plate-img rounded" :src="setDishImage(plate.image)" :alt="plate.name" @error="handleImageError">
                        <span class="badge rounded-pill position-absolute visible-position" :class="(plate.visible? 'text-bg-success' : 'text-bg-danger')">{{ (plate.visible)? 'Disponibile' : 'Non Disponibile' }}</span>
                    </figure>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column align-items-center">
                        <h2 class="mb-0 text-center mb-2">{{ plate.name }}</h2>
                    </div>
                </div>

                <div class="col-12 h-description">
                    <p>
                        {{ plate.description }}
                    </p>
                </div>

                <div class="col-12">
                    <!-- Modale ingredienti -->
                    <p class="d-inline-flex gap-1">
                        <a class="ingredienti" data-bs-toggle="collapse" :href="'#ingredienti' + plate.id" role="button" aria-expanded="false" :aria-controls="'ingredienti' + plate.id">
                            Ingredienti
                        </a>
                    </p>
                    <div class="collapse position-absolute dropdown-ingredienti" :id="'ingredienti' + plate.id">
                        <div class="card card-body p-3 text-dark">
                            {{ plate.ingredient }}
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-auto pt-3" :class="plate.visible==0 ? 'd-none' : '' ">
                    <div class="d-flex align-items-center justify-content-between ">
                        <div class="border-pill rounded-5">
                            <div class="split-pill">
                                <span class="left ps-2 pe-2">{{ plate.price }}</span>
                                <span class="right ps-2 pe-2">€</span>
                            </div>
                        </div>
                        <div>
                            <!-- Bottone aggiungi al carrello -->
                            <AddToCartBtn  @click="addplate(plate)"
                            :in-cart="isInCart(plate)"
                            />
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
    width: 100%;
    aspect-ratio: 2/1;
    object-fit: cover;
    object-position: center;
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
  background: linear-gradient(-90deg, #f58115 32%, black 35%, black 33%, #ffffff 22%);
}

.left {
  padding-right: 5px;
  color: black;
}

.right {
  padding-left: 5px;
  color: black;
}

.border-pill{
    background-image: linear-gradient(-90deg, #ffffff 32%, black 35.5%, black 33%, #f58115 22%);
    padding: 2px;
}

.ingredienti{
    background-color: transparent;
    border: none;
    color: #f58115;
    text-decoration: underline !important; 
}

.h-description{
    max-height: 100px;
    overflow-y: auto;
}

.visible-position{
    top: 10px;
    left: 0px;
}

.close-btn{
    background-color: #f58115;
    color: black;
    border-radius: 5px;
    border: none;
    padding-block: 5px;
    padding-inline: 15px;
}

.close-btn:hover{
    color: white;
    transition-duration: 0.5s;
}

.close-btn:not(:hover){
    transition-duration: 0.5s;
    color: black;
}

.dropdown-ingredienti{
    width: 350px;
    z-index: 2;
}
</style>