<script>
import { store } from '../../Store';
export default {
    name: 'Typologies',

    data() {
        return {
            store,
        }
    },
}
</script>


<template>
<div class="carosello-blu">
    <div class="px-2">
        <div class="row">
            <div class="custom-type-col"  v-for="(type, index) in store.type" :key="type.id">
                <div class="d-flex flex-column row-gap-3">
                    <figure class="mb-0">
                        <img class="img-fluid dish-img" :src="type.image" :alt="type.slug">
                    </figure>
                    <span class="text-white text-capitalize text-center fs-5">{{ type.slug }}</span>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<style lang="scss" scoped>

    .carosello-blu{
        background: #03071e;
        padding-top: 300px;
        width: 100%;
        border: 1px solid red;

    }
    .custom-type-col{
        width: calc(100% / 10);
    }
    .dish-img{
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
    }


</style>