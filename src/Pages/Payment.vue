<script>
import axios from 'axios';
import { store } from '../Store';

export default {
    name: 'Payment',
    data() {
        return {
            store,
            clientToken: '',
            gotToken: false,
        }
    },
    mounted() {
        this.getToken();
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
                            //cart: store.cart
                            number: 10,
                            nonce: payload.nonce,
                        }).then((res) => console.log(res))
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

<div class="page-bg pt-5">
    <div class="container p-5 rounded-2">
        <div class="row">
            <div class="col-6">
                <h1>Dettagli di fatturazione</h1>
                <!-- Input per il nome completo -->
                <div class="input-group">
                    <input type="text"  id="fullname" class="form-control" placeholder="Inserisci il tuo nome completo" aria-describedby="fullname-help">
                </div>
                <small id="fullname-help" class="form-text text-muted p-3">Il tuo nome completo deve includere il nome e il cognome.</small>
                
                <!-- Input per l'email -->
                <div class="input-group my-3 ">
                    <input type="email" id="email" class="form-control" placeholder="Inserisci il tuo indirizzo email" aria-describedby="email-help">
                </div>
                
                <!-- Input per l'indirizzo di casa -->
                <div class="input-group mb-3">
                    <input type="text" id="address" class="form-control" placeholder="Inserisci il tuo indirizzo di casa" aria-describedby="address-help">
                </div>
                
                
                <!-- Input per il numero di telefono -->
                <div class="input-group mb-3">
                    <input type="tel" id="phone" class="form-control" placeholder="Inserisci il tuo numero di telefono" aria-describedby="phone-help">
                </div>
            </div>
            <div class="col-6">
                <div class="bg-light p-3 rounded-2">
                    <h1 class="text-center">sezione riepilogo</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div id="dropin-container"></div>
                <button class="btn btn-warning"  id="submit-button" @click="payBtn">Purchase</button>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
    .container{
    background-color:$light-gray ;
}
.page-bg{
    background-color: $dark-navy-blue;
    height: 100vh;
}
</style>