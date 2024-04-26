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
                
            }
        },
        methods:{
            getPlates(){
                axios.get(`http://127.0.0.1:8000/api/restaurant/${this.$route.params.slug}`).then((res)=> { 
                    this.plates = res.data.dishes
                    this.restaurant = res.data.restaurant
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

            }
        },
        mounted(){
            this.getPlates();
        },
    }
</script>

<template>
<div class="container">
    <div class="text-center py-3">
        <h1 @click="log()">{{ restaurant.activity_name }}</h1>
        <p>{{ restaurant.address }}</p>
        <p>{{ restaurant.piva }}</p>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="(plate, index) in plates" :key="plate.id" @click="addplate(plate)">
            <div class="my-3">
                <Plate
                :plate = plate
                />
            </div>
        </div>
    </div>
</div>

<Cart/>

</template>


<style lang="scss" scoped>
    
</style>