<script>
export default {
    name: 'Plate',
    props:['plate'],
    data() {
        return {
            
        }
    },
}
</script>

<template>
<div class="border border-4 p-5 bg-primary">
    <p>{{ plate.name }}</p>
    <p>{{ plate.description }}</p>
    <p>{{ plate.ingredient }}</p>
    <p>{{ plate.price }}€</p>
    <p>{{ plate.category.name }}</p>
    <p>{{ (plate.visible)? 'Disponibile' : 'Non Disponibile' }}</p>
    <!-- <p>{{ plate.image }}</p> -->
</div>
</template>

<style lang="">
    
</style>