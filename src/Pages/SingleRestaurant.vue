<script>
import Plate from '../components/Plate.vue'
import axios from 'axios';
import {store} from '../Store';


export default {
        name: "AppHome",
        components:{
            Plate
        },
        props: {
            activateType: String,
        },
        data(){
            return{
                store,
                plate:{}
                
            }
        },
        methods:{
            getPlate(){
                axios.get('http://127.0.0.1:8000/api/restaurant/${this.$route.params.id}').then(res=>{
                    this.plate=res.data.dishes
                    console.log(this.plate)
                })
            },
        },

        mounted(){
            this.getPlate();
        },
    }
    
    



        
    
    
</script>






<template>


  


</template>








<style lang="scss" scoped>
    




</style>