<script>
import axios from 'axios';
import {store} from '../Store';
import Plate from '../components/Plate.vue';
import Cart from '../components/Cart.vue'

export default {
        name: "SingleRestaurant",
        components:{
            Plate,
            Cart,
        },
        data(){
            return{
                store,
                plates: [],
                restaurant: [],
                storedArray:"",
                arrayString:"",
                storedArray:"",
                parsedArray:[],
                controllo:false,
                ArrayPrimi: [],
                ArraySecondi: [],
                ArrayDessert: [],
                ArrayBevande: [],
            }
        },
        methods:{
            getPlates(){
                axios.get(`http://127.0.0.1:8000/api/restaurant/${this.$route.params.slug}`).then((res)=> { 
                    this.plates = res.data.dishes
                    this.restaurant = res.data.restaurant
                    this.dishSorterer();
                } )
            },

            addplate(plate){
                
                // controllo se esiste la chiave nel local storage, se non c e pusho il piatto
                if(localStorage.getItem('arrayKey') == null){
                    this.parsedArray.push(plate)
                    this.arrayString=JSON.stringify(this.parsedArray)
                    localStorage.setItem('arrayKey', this.arrayString)
                    
                }else{
                    // se gia esiste un piatto devo controllare se è gia incluso

                     this.storedArray = localStorage.getItem('arrayKey')
                     this.parsedArray = JSON.parse(this.storedArray)

                    this.controllo=false

                    // ciclo che controlla i singoli id in local con l id del piatto cliccato

                    this.parsedArray.forEach(element => {
                        
                        if(element.id == plate.id){
                            this.controllo=true
                        }
                    });
                     
                    // se la variabile controllo è false allora quel piatto è gia presente

                    if(!this.controllo){
                    
                        this.parsedArray.push(plate)
                        this.arrayString=JSON.stringify(this.parsedArray)
                        localStorage.setItem('arrayKey', this.arrayString) 

                    }else{
                        console.log("piatto gia aggiunto")

                    }}








                // if(!this.parsefArray){
                //     this.parsedArray.push(plate)
                //     this.arrayString=JSON.stringify(this.parsedArray)
                //     localStorage.setItem('arrayKey', this.arrayString)
                // }else{
                //     if((!this.parsedArray.includes(plate))){
                //         this.parsedArray.push(plate)
                //         this.arrayString=JSON.stringify(this.parsedArray)
                //         localStorage.setItem('arrayKey', this.arrayString)

                // }else{
                //     console.log("piatto gia aggiunto")
    
                // }

                // }
                
            
            },
            log(){
                this.storedArray = localStorage.getItem('arrayKey')

                // Convertire la stringa JSON in un array
                this.parsedArray = JSON.parse(this.storedArray)

                // Utilizzare l'array recuperato
            
                    
                console.log(this.parsedArray)

            },
            dishSorterer(){
                this.plates.forEach(plate => {
                    if(plate.category_id == 1){
                        this.ArrayPrimi.push(plate);
                    } else if(plate.category_id == 2){
                        this.ArraySecondi.push(plate);
                    } else if(plate.category_id == 3){
                        this.ArrayDessert.push(plate);
                    } else if(plate.category_id == 4){
                        this.ArrayBevande.push(plate);
                    }
                });
            }
        },
        mounted(){
            this.getPlates();
        },
    }
</script>

<template>
    <div class="bg-container">

        <div class="bg-restaurant position-relative" :style="{ backgroundImage: 'url(http://127.0.0.1:8000/storage/' + restaurant.image + ')' }">
            <div class=" position-absolute info-flex d-flex align-items-center">
                <div class="text-center py-3 info-box rounded">
                    <h1>{{ restaurant.activity_name }}</h1>
                    <p>{{ restaurant.address }}</p>
                    <p>{{ restaurant.piva }}</p>
                </div>
                <img src="../assets/img/add-to-cart.png" alt="add-to-cart" class="add-to-cart">
            </div>
        </div>
        <div class="container py-4">
            <div v-if="this.ArrayPrimi.length > 0" class="pb-4">
                <h2>Primi</h2>
                <div class="d-flex justify-content-start flex-wrap gap-4">
                    <Plate
                    v-for="(plate, index) in this.ArrayPrimi" :key="plate.id" 
                    class="w-card"
                    @click="addplate(plate)"
                    :plate = plate
                    />
                </div>
            </div>
            <div v-if="this.ArraySecondi.length > 0" class="pb-4">
                <h2>Secondi</h2>
                <div class="d-flex justify-content-start flex-wrap gap-4">
                    <Plate
                    v-for="(plate, index) in this.ArraySecondi" :key="plate.id" 
                    class="w-card"
                    @click="addplate(plate)"
                    :plate = plate
                    />
                </div>
            </div>
            <div v-if="this.ArrayDessert.length > 0" class="pb-4">
                <h2>Dessert</h2>
                <div class="d-flex justify-content-start flex-wrap gap-4">
                    <Plate
                    v-for="(plate, index) in this.ArrayDessert" :key="plate.id" 
                    class="w-card"
                    @click="addplate(plate)"
                    :plate = plate
                    />
                </div>
            </div>
            <div v-if="this.ArrayBevande.length > 0">
                <h2>Bevande</h2>
                <div class="d-flex justify-content-start flex-wrap gap-4">
                    <Plate
                    v-for="(plate, index) in this.ArrayBevande" :key="plate.id" 
                    class="w-card"
                    @click="addplate(plate)"
                    :plate = plate
                    />
                </div>
            </div>
        </div>
    </div>

<Cart/>

</template>


<style lang="scss" scoped>
    .bg-restaurant{
        width: 100%;
        height: 400px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        box-shadow: 0px 8px 25px 5px rgb(0, 0, 0, 0.5);
        margin-bottom: 100px;
    }

    .info-box{
        background-color: rgba(0, 0, 0, 0.7);
        width: 30%;
        color: white;
    }

    .info-flex{
        top: 56%;
        left: 5%;
        gap: 55rem;
    }

    .add-to-cart{
        width: 22%;
    }

    .w-card{
        --gap: 1.5rem;
    	--columns: 3;
    	flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));
    }

    .bg-container{
        background: rgb(255,150,84);
        background: linear-gradient(145deg, rgba(255,150,84,1) 0%, rgba(255,219,108,1) 50%, rgba(253,145,82,1) 100%);
    }
</style>