<script>
import axios from 'axios';

export default {
    name: 'Payment',

    mounted() {
        axios.post('http://127.0.0.1:8000/api/braintree/get-token').then((res)=> console.log(res));
    },
}
</script>


<template>
  <div id="dropin-container"></div>
</template>

<style lang="">
    
</style>