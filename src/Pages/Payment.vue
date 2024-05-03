<script>
import axios from 'axios';
import { store } from '../Store';
import {router} from '../router';

import CartCard from '../components/Header/CartCard.vue';

export default {
    name: 'Payment',
    components:{
            CartCard,
        },
    data() {
        return {
            store,
            clientToken: '',
            gotToken: false,
            restaurant:"",
            valid:false,
        }
    },
    mounted() {
        this.getToken();
        store.full_name="";
        store.email="";
        store.address="";
        store.tel="";
        store.description="";
        this.valid=false;
       
    },
    methods: {
        validation(){
            let controllo=true


            if(store.full_name){

                let validRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-']+(\s[A-Za-zÀ-ÖØ-öø-ÿ\-']+)*$/;
                if( !validRegex.test(store.full_name)){
                    document.getElementById('nameerror').innerHTML="Inserisci solo caratteri o spazi"
                    controllo=false
                }else{
                    document.getElementById('nameerror').innerHTML=""
                }

            }else{
            document.getElementById('nameerror').innerHTML="Inserisci le informazioni"
            controllo=false
            }




            if(store.email){


                
                let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if( !validRegex.test(store.email)){
                    document.getElementById('emailerror').innerHTML="Inserisci solo lettere maiuscole, minuscole, numeri e solo @ e . come caratteri speciali"
                    controllo=false
                }else{
                    document.getElementById('emailerror').innerHTML=""
                }
                
            }else{
                document.getElementById('emailerror').innerHTML="Inserisci le informazioni"
                controllo=false
             }


             if(store.address){
                let validRegex = /^[0-9a-zA-Z.,\s]+$/;
                if( !validRegex.test(store.address)){
                    document.getElementById('addresserror').innerHTML="Inserisci solo caratteri alfabetici,numeri,virgole o punti"
                    controllo=false
                }else{
                    document.getElementById('addresserror').innerHTML=""
                }

             }else{
                document.getElementById('addresserror').innerHTML="Inserisci le informazioni"
                controllo=false
             }


             if(store.tel){
                let validRegex = /^[0-9]{6,14}$/;
                if( !validRegex.test(store.tel)){
                    document.getElementById('telerror').innerHTML="Inserisci un numero di telefono compreso tra 6 e 14 numeri"
                    controllo=false
                }else{
                    document.getElementById('telerror').innerHTML=""
                }


             }else{
                document.getElementById('telerror').innerHTML="Inserisci le informazioni"
                controllo=false
             }

             if(store.description){
                let validRegex = /^[0-9a-zA-Z.,\s]+$/;
                if( !validRegex.test(store.description)){
                    document.getElementById('descriptionerror').innerHTML="Non inserire caratteri speciali eccetto il punto o la virgola"
                    controllo=false
                }else{
                    document.getElementById('descriptionerror').innerHTML=""
                }
             }else{
                document.getElementById('descriptionerror').innerHTML=""
             }

             if(controllo === true){
                this.valid=true
             }else{
                this.valid=false
             }

        },
        
        async getToken(){
            this.gotToken = false;
            await axios.get('http://127.0.0.1:8000/api/braintree/get-token')
            .then((res)=> {
                this.clientToken = res.data.token
                this.gotToken = true;
            })
        },

        braintreeInit(){
            
            const button = document.querySelector('#submit-button');
            braintree.dropin.create({
            authorization: this.clientToken,
            locale: 'it_IT',
            container: '#dropin-container',
            }, function (createErr, instance){
                button.addEventListener('click', function () {
                    instance.requestPaymentMethod(async function (requestPaymentMethodErr, payload) {
                        if (requestPaymentMethodErr) {
                            console.error('Error requesting payment method:', requestPaymentMethodErr);
                            return;
                        }
                        

                        await axios.post('http://127.0.0.1:8000/api/braintree/payment', {
                            //qui ci va il local storage con l'intero ordine, tipo:

                            full_name:store.full_name,
                            email:store.email,
                            address:store.address,
                            tel:store.tel,
                            description:store.description,
                            cart: store.listplatelocalstorage,
                            idrestaurant:store.actualrestaurant.restaurant.id,
                            nonce: payload.nonce,
                        }).then((res) => {
                            if(res.data.success){
                                router.push({ name: 'Success' })
                            }else{
                                router.push({ name: 'FailedCheckout' });
                            }
                     } )
                    })
                })
            }) 
        },
    },
    watch: {
        'gotToken': {
            handler (newVal, oldVal){
                if(this.gotToken){
                    this.braintreeInit();
                }
            }
        }
    }
}
</script>


<template>

<div class="page-bg pt-5 ">
    <div class="container-fluid container-lg p-0 p-lg-5 rounded-2">
        <div class="row">
            <div class="col-12 d-flex gap-lg-3">
                <div class="col-6">
                    <h1>Dettagli di fatturazione</h1>
                    <!-- Input per il nome completo -->
                    <div class="d-flex flex-column">
                        <label for="name">Nome e Cognome*</label>
                        <input name="name" type="text" v-model="store.full_name"  id="fullname" class="form-control" placeholder="Nome completo" aria-describedby="fullname-help">
                        <small id="nameerror"></small>
                    </div>
                    
                    <!-- Input per l'email -->
                    <div class="d-flex flex-column my-3">
                        <label for="email">Inserisci la tua Email*</label>
                        <input name="email" type="text" id="email" v-model="store.email" class="form-control" placeholder="Email" aria-describedby="email-help">
                        <small id="emailerror"></small>
                    </div>

                    
                    <!-- Input per l'indirizzo di casa -->
                    <div class="d-flex flex-column my-3">
                        <label for="address">Inserisci il tuo indirizzo di casa*</label>
                        <input name="address" type="text" id="address" v-model="store.address" class="form-control" placeholder="Indirizzo" aria-describedby="address-help">
                        <small id="addresserror"></small>
                    </div>

                    
                    
                    <!-- Input per il numero di telefono -->
                    <div class="d-flex flex-column my-3">
                        <label for="tel">Numero di telefono*</label>
                        <input name="tel" type="tel" id="phone" v-model="store.tel" class="form-control" placeholder="telefono" aria-describedby="phone-help">
                        <small id="telerror"></small>
                    </div>

                    <div class="d-flex flex-column my-3">
                        <label for="description">Inserisci più dettagli sulla consegna</label>
                        <textarea name="description" id="description" cols="50" rows="10" v-model="store.description"></textarea>
                        <small id="descriptionerror"></small>
                    </div>


                </div>
                <div class="col-6" style="height: 600px;">
                    <div class="bg-light rounded-2 overflow-y-scroll " style="height: 100%;">
                        <h1 class="text-center">
                            {{ store.actualrestaurant.restaurant?.activity_name }}
                        </h1>
                            <div v-for="(plate, index) in store.listplatelocalstorage" :key="index" class="overflow-y-scroll">
                    
                                <CartCard :plate="plate"/>
                            
                            </div>
                    </div>
                </div>
            </div>

            <button class="btn-validazione" @click="validation()">Clicca per validare i dati</button>

            <div class="col-12 mb-5" :class="valid==true ? 'd-bock':'d-none'">
                    <div style="height: 300px;" class="d-flex flex-column align-items-center">
                            <div id="dropin-container"></div>
                            <button class="btn btn-warning"  id="submit-button" @click="payBtn">Purchase</button>
                    </div>
                </div>




        <div>
            
        </div>
            
            </div>
    </div>
    
</div>

</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
    .container-fluid{
    background-color:$light-gray ;
}
.page-bg{
    background-color: $dark-navy-blue;
}

small{
    color: red;
    height: 2em;
}

.btn-validazione{
    border: none;
    background-color: $orange;
    border-radius: 5px;
    width: 25%;
    margin: 0 auto;
    padding-inline: 15px;
    padding-block: 5px;
    font-size: 20px;
    font-weight: bold;
}

.btn-validazione:hover{
    color: white;
    transition-duration: 0.4s;
}

#description{
    resize: none;
}
</style>