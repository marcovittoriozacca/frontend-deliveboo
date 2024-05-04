<script>
import Loader from '../GeneralComponents/Loader.vue';
import { store } from '../../Store';
export default {
    name: 'Typologies',
    components:{
        Loader,
    },
    data() {
        return {
            store,
        }
    },

    methods: {
        activeTypologies(slug) {
            
            if (store.active_typologies.includes(slug)) {
                store.active_typologies.splice(store.active_typologies.indexOf(slug), 1);
            } else {
                store.active_typologies.push(slug);
            }
                //se l'elemento non esiste nel nostro array lo pushiamo, altrimenti lo rimuoviamo
        },
    },
}
</script>


<template>
<div class="py-2">
    <div class="px-1">
        <div class="row">
            <div v-if="store.typesLoading">
                <Loader/>
            </div>
            <div v-for="(type, index) in store.type" :key="type.id" class="col-6 col-sm-4 col-md-3 col-lg-2 col-xxl py-2" v-else>
                <!-- intera card, function -->
                <div @click="activeTypologies(type.slug)" class="orange-border rounded-5" :class="store.active_typologies.includes(type.slug)? 'active-card' : '' ">
                    <div class="position-relative d-flex justify-content-center align-content-center">
                        <figure class="mb-0 m-0">
                            <img class="dish-img" :src="type.image" :alt="type.slug">
                        </figure>
                        <div class="opacity-bg-black rounded px-3 py-1 position-absolute top-50 start-50 translate-middle">
                            <p class="mb-0 text-uppercase">{{ type.slug }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<style lang="scss" scoped>
@use '../../assets/sass/partials/variables' as *;
    .dish-img{
        width: 100%;
        aspect-ratio: 1;
        object-fit: contain;
    }
    
    .orange-border{
        border: 1px solid $base-orange;
    }

    .opacity-bg-black{
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
    }
    .active-card{
        transition: .1s all linear;
        transform: scale(110%);
        border: 5px solid $orange;
        background-color: rgba(107, 107, 107, 0.794);

        .opacity-bg-black{
        background-color: rgba(0, 0, 0, 1);
        color: $orange;
            p::after{
                margin-left: 5px;
                content: '\2713';
            }
        }
    }

</style>