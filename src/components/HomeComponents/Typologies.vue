<script>
import { Carousel, Slide } from 'vue3-carousel'
import { store } from '../../Store';
import Loader from '../GeneralComponents/Loader.vue';
export default {
    name: 'Typologies',

    components: {
        Carousel,
        Slide,
        Loader,
    },

    data() {
        return {
            store,
            currentSlide: 0,
            breakpoints: {
                0:{
                    itemsToShow: 1,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                350:{
                    itemsToShow: 1.8,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
                500:{
                    itemsToShow: 3,
                    snapAlign: "center",
                    itemsToScroll: 1,
                },
				// 700px and up
				700: {
					itemsToShow: 3.5,
					snapAlign: "center",
                    itemsToScroll: 3.5,
				},
				800: {
					itemsToShow: 4,
					snapAlign: "center",
                    itemsToScroll: 3.5,
				},
				900: {
					itemsToShow: 5,
					snapAlign: "center",
                    itemsToScroll: 4,
				},
				// 1024 and up
				1024: {
					itemsToShow: 5,
					snapAlign: "start"
				},
				// 1024 and up
				1200: {
					itemsToShow: 7,
					snapAlign: "center",
                    itemsToScroll: 6,
				}
			}

        }

    },

    methods: {
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },

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

<div class="d-flex flex-row flex-wrap gap-2">
    <div v-if="store.typesLoading">
        <Loader/>
    </div>


    <div v-for="(type, index) in store.type" :key="type.id" v-else class="card-type">
        <div class="p-3">

            <!-- intera card, function -->
            <div @click="activeTypologies(type.slug)" class="orange-border rounded-5 larghezza-singola-card" :class="store.active_typologies.includes(type.slug)? 'active-card' : '' ">
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

    .card-type{
        --gap: 0.5rem;
        --columns: 10;
        flex-basis: calc((100% / var(--columns)) - var(--gap) + (var(--gap) / var(--columns)));

    }

    .larghezza-singola-card{
        width: 100%;
    }
</style>