<script>
import { store } from '../Store';


export default{
    name: "Ckeckout",
    data(){
        return{
          store
        }
    },
    mounted(){
    },
}
</script>

<template>
    <div class="container p-5">
        <div class="row">
            <div class="col-6">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">nome completo</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                
                <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon2">
                    <span class="input-group-text" id="basic-addon2">email</span>
                </div>
                
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">indirizzo</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Numero di telefono</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="col-6">
                <div class="bg-light p-3">
                    <h1 class="text-center">sezione riepilogo</h1>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

</style>
