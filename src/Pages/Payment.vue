<script>
import axios from 'axios';
import { store } from '../Store';

export default {
    name: 'Payment',
    data() {
        return {
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
<div class="container">
    <div id="dropin-container"></div>
       <button id="submit-button" @click="payBtn">Purchase</button>
</div>
</template>

<style lang="scss" scoped>
    
</style>