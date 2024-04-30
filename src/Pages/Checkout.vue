<script>
import { store } from '../Store'
export default{
    name: "Checkout",
    data(){
        return{
          store,
        }
    },
    methods:{ 
    },
    mounted(){
        
    },
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
</div>
    </template>

<style scoped lang="scss">
@use '../assets/sass/partials/variables' as *;
.container{
    background-color:$light-gray ;
}
.page-bg{
    background-color: $dark-navy-blue;
    height: 100vh;
}
</style>
