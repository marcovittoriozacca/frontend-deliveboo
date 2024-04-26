<script>
export default {
    name:'UpBtn',
    props:['link'],
}

</script>

<template>
    
    <a :href="link" class="bg-white border rounded-circle px-3 py-3">
        <i class="fas fa-arrow-up"></i>
    </a>

</template>

<style lang="scss" scoped>
@use '../../assets/sass/partials/variables.scss' as *;

i{
    color: $orange
}
    
</style>