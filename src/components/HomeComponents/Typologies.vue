<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { store } from '../../Store';
export default {
    name: 'Typologies',

    components: {
        Carousel,
        Slide,
        Navigation,
    },

    data() {
        return {
            store,
        }

    },
}
</script>


<template>

<Carousel :items-to-show="5" :items-to-scroll="4" :wrap-around="true" class="carosello-blu" :i18n="{
    iconArrowLeft:'Scorri verso sinistra',
    iconArrowRight:'Scorri verso destra'
}">
    <Slide v-for="(type, index) in store.type" :key="type.id">
        <div class="carousel__item p-3">
            <div class="orange-border rounded-5 p-4">
                <div class="d-flex flex-column row-gap-3 rounded rounded-4">
                    <figure class="mb-0 m-0">
                        <img width="100" class="dish-img" :src="type.image" :alt="type.slug">
                    </figure>
                    <div class="orange-bg rounded-pill px-2 py-1 fit-content mx-auto">
                        <p class="text-white mb-0 text-uppercase">{{ type.slug }}</p>
                    </div>
                </div>
            </div>
        </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>

</Carousel>

</template>


<style lang="scss" scoped>
@use '../../assets/sass/partials/variables' as *;

    .carosello-blu{
        background: #03071e;
    }
    .custom-type-col{
        width: calc(100% / 10);
    }
    .dish-img{
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
    }
    .fit-content{
        width: fit-content;
    }
    .orange-bg{
        background-color: $base-orange;
    }
    .orange-border{
        border: 1px solid $base-orange;
    }
    .svg{
        color: red;
    }


</style>