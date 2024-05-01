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
        }
    },
    mounted() {
        this.getToken();
        store.full_name="";
        store.email="";
        store.address="";
        store.tel="";
       
    },
    methods: {
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
                    <div class="input-group">
                        <input type="text" v-model="store.full_name" id="fullname" class="form-control" placeholder="Inserisci il tuo nome completo" aria-describedby="fullname-help">
                    </div>
                    <small id="fullname-help" class="form-text text-muted p-3">Il tuo nome completo deve includere il nome e il cognome.</small>
                    
                    <!-- Input per l'email -->
                    <div class="input-group my-3">
                        <input type="email" id="email" v-model="store.email" class="form-control" placeholder="Inserisci il tuo indirizzo email" aria-describedby="email-help">
                    </div>
                    
                    <!-- Input per l'indirizzo di casa -->
                    <div class="input-group mb-3">
                        <input type="text" id="address" v-model="store.address" class="form-control" placeholder="Inserisci il tuo indirizzo di casa" aria-describedby="address-help">
                    </div>
                    
                    
                    <!-- Input per il numero di telefono -->
                    <div class="input-group mb-3">
                        <input type="tel" id="phone" v-model="store.tel" class="form-control" placeholder="Inserisci il tuo numero di telefono" aria-describedby="phone-help">
                    </div>

                    <div class="input-group mb-3">
                        <textarea id="description" cols="50" rows="10" v-model="store.description"></textarea>
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

            <div class="col-12">
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

#description{
    resize: none;
}
</style>